import React from 'react';
import PureComponent from 'pure-component';
import { Animated, Easing, AppState, KeyboardAvoidingView, Platform, Alert, BackHandler } from 'react-native';
import { createStackNavigator, createTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import NavigationService, { emitNavigationChanged } from 'services/NavigationService';
import GlobalFollowTabBar from 'components/GlobalFollowTabBar';
import { GLOBAL_UPDATE_APP_STATE } from 'store/global';

//Splash
import SplashScreen from 'screens/SplashScreen/SplashScreen';

//Home
import HomeScreen from 'screens/HomeScreen/HomeScreen';
// import MangaComponent from 'screens/HomeScreen/MangaComponent';

//Manga
import MangaScreen from 'screens/MangaScreen/MangaScreen';
import MangaSummarizeScreen from 'screens/MangaScreen/MangaSummarizeScreen';
import MangaDetailScreen from 'screens/MangaScreen/MangaDetailScreen';

//Follow
import FollowScreen from 'screens/FollowScreen/FollowScreen';
import HistoryScreen from 'screens/HistoryScreen/HistoryScreen';
import DownloadScreen from 'screens/DownloadScreen/DownloadScreen';

//WebView
import WebViewScreen from 'screens/WebViewScreen/WebViewScreen';


//SettingScreen
import SettingScreen from 'screens/SettingScreen/SettingScreen';
import LanguageSettingsScreen from 'screens/LanguageSettingsScreen/LanguageSettingsScreen';
import FeedbackScreen from 'screens/FeedbackScreen/FeedbackScreen';
import AboutUsScreen from 'screens/AboutUsScreen/AboutUsScreen';

//Account
// import AccountScreen from 'screens/AccountScreen/AccountScreen';


//Search
import SearchScreen from 'screens/SearchScreen/SearchScreen';


const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 150,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const { index } = scene;
            const width = layout.initWidth;
      
            return {
                opacity: position.interpolate({
                    inputRange: [index - 1, index, index + 1],
                    outputRange: [ 0, 1, 0],
                }),
                transform: [{
                    translateX: position.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [width, 0, -width],
                    }),
                }]
            };
        },
        containerStyle: {
            backgroundColor: 'transparent',
        },
    };
};


export const Routes = createStackNavigator(
    {
        SplashScreen: SplashScreen,

        HomeScreen: HomeScreen,
        // MangaComponent: MangaComponent,

        WebViewScreen: WebViewScreen,

        //Follow, History, Download
        FollowMain: createTabNavigator({
            FollowScreen: FollowScreen,
            HistoryScreen: HistoryScreen,
            DownloadScreen: DownloadScreen,

        }, {
            initialRouteName: 'FollowScreen',
            tabBarComponent: GlobalFollowTabBar,
            tabBarPosition: 'top',
            animationEnabled: true,
        }), 

        SettingScreen: SettingScreen,
        LanguageSettingsScreen: LanguageSettingsScreen,
        FeedbackScreen: FeedbackScreen, 
        AboutUsScreen: AboutUsScreen,

        SearchScreen: SearchScreen,

        MangaScreen: MangaScreen,
        MangaDetailScreen: MangaDetailScreen,
    },
    {
        initialRouteName: 'SplashScreen',
        headerMode: 'none',
        transitionConfig: transitionConfig,
        cardStyle: {
            backgroundColor: 'transparent',
            opacity: 1,
        },
    }
);



class RoutesComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
    }
    shouldComponentUpdate() {
        return false;
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
        BackHandler.removeEventListener('hardwareBackPress', this.onDeviceBackButtonPress);
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
        BackHandler.addEventListener('hardwareBackPress', this.onDeviceBackButtonPress);
    }
    onDeviceBackButtonPress() {
        Alert.alert(
            'Exit App',
            'Exiting the application?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp(),
            }, ], {
                cancelable: false
            }
        )
        return true;
    }

    handleAppStateChange(nextAppState) {
        this.props.updateAppState(nextAppState);
    }

    setTopLevelNavigator(navigatorRef) {
        NavigationService.setTopLevelNavigator(navigatorRef);
    }

    onNavigationStateChange(prevState, newState) {
        if (newState.isTransitioning) {
            return;
        }
        emitNavigationChanged(newState.routes[newState.index]);
    }

    render() {
        return (
            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? 'padding' : null }
                style={{ flex: 1 }}
            >
                <Routes ref={ this.setTopLevelNavigator } onNavigationStateChange={ this.onNavigationStateChange }  />
            </KeyboardAvoidingView>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateAppState: (appState) => {
        return dispatch(GLOBAL_UPDATE_APP_STATE(appState));
    },
});


export default connect(null, mapDispatchToProps)(RoutesComponent);
