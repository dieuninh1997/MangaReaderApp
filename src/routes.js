import React from 'react';
import PureComponent from 'pure-component';
import { Animated, Easing, AppState, KeyboardAvoidingView, Platform, Alert, BackHandler } from 'react-native';
import { createStackNavigator, createTabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import NavigationService, { emitNavigationChanged } from 'services/NavigationService';


//Splash
import SplashScreen from 'screens/SplashScreen/SplashScreen';

//Home
import HomeScreen from 'screens/HomeScreen/HomeScreen';
import MangaComponent from 'screens/HomeScreen/MangaComponent';

//Follow
import FollowScreen from 'screens/FollowScreen/FollowScreen';

//WebView
import WebViewScreen from 'screens/WebViewScreen/WebViewScreen';


//SettingScreen
import SettingScreen from 'screens/SettingScreen/SettingScreen';
import LanguageSettingsScreen from 'screens/LanguageSettingsScreen/LanguageSettingsScreen';

//Account
// import AccountScreen from 'screens/AccountScreen/AccountScreen';

//Setting
// import SettingScreen from 'screens/SettingScreen/SettingScreen';

//Search
// import SearchScreen from 'screens/SearchScreen/SearchScreen';


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
        MangaComponent: MangaComponent,

        WebViewScreen: WebViewScreen,

        FollowScreen: FollowScreen,

        SettingScreen: SettingScreen,
        LanguageSettingsScreen: LanguageSettingsScreen,
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

    // shouldComponentUpdate() {
    //     return false;
    // }

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



export default RoutesComponent;
