import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Keyboard, Platform, Animated, TouchableWithoutFeedback } from 'react-native';
import PureComponent from 'pure-component';
import _ from 'lodash';
import ViewOverflow from 'react-native-view-overflow';

import GlobalTabBarIcon from 'components/GlobalTabBarIcon';
import GlobalTabBarLabel from 'components/GlobalTabBarLabel';
import { onNavigationChanged, navigate } from 'services/NavigationService';

import styles from 'styles/components/GlobalTabBar';
import { Colors } from 'styles/variables';


class TabbarButton extends PureComponent {

    constructor(props) {
        super(props);

        this.onButtonPressed = this.onButtonPressed.bind(this);
        this.startAnimation = this.startAnimation.bind(this);

        this.animatedValue = new Animated.Value(0);
        if (props.focused) {
            this.springAnimatedValue = new Animated.Value(1);
        } else {
            this.springAnimatedValue = new Animated.Value(0);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.focused && !nextProps.focused) {
            this.springAnimatedValue.setValue(0);
        }
    }

    startAnimation() {
        this.animatedValue.setValue(0);
        this.springAnimatedValue.setValue(0);

        Animated.parallel([
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                }
            ),
            Animated.spring(
                this.springAnimatedValue,
                {
                    toValue: 1,
                    friction: 1,
                    velocity: 40,
                    useNativeDriver: true,
                }
            )
        ]).start();
    }

    onButtonPressed() {
        const { routeName } = this.props;
        this.startAnimation();
        window.requestAnimationFrame(() => {
            navigate(routeName);
        });
    }

    render() {
        const { routeName, focused } = this.props;

        const scale = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 3.5],
        });
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 0.2, 1],
            outputRange: [0, 1, 0],
        });

        const scaleIcon = this.springAnimatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 1.05],
        });

        return (
            <TouchableWithoutFeedback onPress={ this.onButtonPressed }>
                <ViewOverflow style={ styles.menuContainer }>
                    {/* Icon */}
                    <Animated.View
                        style={{
                            transform: [{
                                scaleX: scaleIcon,
                            }, {
                                scaleY: scaleIcon,
                            }]
                        }}
                    >
                        <GlobalTabBarIcon routeName={ routeName } focused={ focused } />
                    </Animated.View>

                    {/* Label */}
                    <GlobalTabBarLabel routeName={ routeName } focused={ focused } />

                    <ViewOverflow style={ styles.menuAnimationContainer }>
                        <Animated.View style={{
                            width: 20,
                            height: 20,
                            borderRadius: 20,
                            opacity: opacity,
                            backgroundColor: Colors.lightenPrimary,
                            transform: [{
                                scaleX: scale,
                            }, {
                                scaleY: scale,
                            }]
                        }} />
                    </ViewOverflow>
                </ViewOverflow>
            </TouchableWithoutFeedback>
        );
    }
}



class GlobalTabBar extends PureComponent {

    keyboardDidShowListener = null;
    keyboardDidHideListener = null;

    state = {
        routeName: '',
        showTabBar: false,
        shouldShowTabBar: false,
        homeMenuFocused: false,
        settingMenuFocused: false,
        searchMenuFocused: false,
        followMenuFocused: false,
    }

    constructor(props) {
        super(props);

        this.keyboardDidShow = this.keyboardDidShow.bind(this);
        this.keyboardDidHide = this.keyboardDidHide.bind(this);

        this.animationValue = new Animated.Value(0);

        onNavigationChanged((currentState) => {
            const { routeName } = currentState;

            const shouldShowTabBar = (routeName === 'HomeScreen') ||
                (routeName === 'SearchScreen') ||
                (routeName === 'FollowMain') ||
                // (routeName === 'WalletDetailScreen') ||

                (routeName === 'SettingScreen');//||
                // (routeName === 'LanguageSettingsScreen') ||
                // (routeName === 'ListWalletScreen') ||
                // (routeName === 'WalletManagementScreen') ||
                // (routeName === 'PreWalletBackupScreen') ||
                
                // (routeName === 'ExchangePostConfirmationScreen') ||
                // (routeName === 'ExchangeAddressConfirmationScreen') ||
                // (routeName === 'ExchangeMain');

            const homeMenuFocused = (routeName === 'HomeScreen');
            const settingMenuFocused = (routeName === 'SettingScreen');
            const searchMenuFocused = (routeName === 'SearchScreen');
            const followMenuFocused = (routeName === 'FollowMain');

            this.setState({
                routeName: routeName,
                shouldShowTabBar: shouldShowTabBar,
                homeMenuFocused: homeMenuFocused,
                settingMenuFocused: settingMenuFocused,
                searchMenuFocused: searchMenuFocused,
                followMenuFocused: followMenuFocused,
            });
        });
    }

    componentDidMount() {
        if (Platform.OS === 'android') {
            // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow);
            // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide);
        }
    }

    componentWillUnmount () {
        if (Platform.OS === 'android') {
            this.keyboardDidShowListener.remove();
            this.keyboardDidHideListener.remove();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!prevState.shouldShowTabBar && this.state.shouldShowTabBar) {
            this.showTabBarAnimation();
        }

        if (prevState.shouldShowTabBar && !this.state.shouldShowTabBar) {
            this.hideTabBarAnimation();
        }
    }

    showTabBarAnimation() {
        this.setState({ showTabBar: true, });
        Animated
            .timing(this.animationValue, {
                toValue: 1,
                duration: 100,
            })
            .start();
    }

    hideTabBarAnimation() {
        Animated
            .timing(this.animationValue, {
                toValue: 0,
                duration: 100,
            })
            .start(() => {
                this.setState({ showTabBar: false, });
            });
    }

    keyboardDidShow() {
        const { shouldShowTabBar } = this.state;

        if (shouldShowTabBar) {
            this.hideTabBarAnimation();
        }
    }

    keyboardDidHide() {
        const { shouldShowTabBar } = this.state;

        if (shouldShowTabBar) {
            this.showTabBarAnimation();
        }
    }
    

    render() {
        const { 
            homeMenuFocused, 
            settingMenuFocused, 
            searchMenuFocused,
            followMenuFocused,
            showTabBar } = this.state;

        if (!showTabBar) {
            return null;
        }

        const tabBarHeight = this.animationValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 60]
        });

        return (
            <SafeAreaView style={ styles.container }>
                <Animated.View
                    style={[styles.tabBar, {
                        height: tabBarHeight,
                    }]}
                >
                    {/* Home menu */}
                    <View style={ styles.menuWrapper }>
                        <TabbarButton routeName="HomeScreen" focused={ homeMenuFocused } />
                    </View>

                     {/* Follow menu */}
                     <View style={ styles.menuWrapper }>
                        <TabbarButton routeName="FollowMain" focused={ followMenuFocused } />
                    </View>
                    
                    {/* Setting menu */} 
                     <View style={ styles.menuWrapper }>
                        <TabbarButton routeName="SettingScreen" focused={ settingMenuFocused } />
                    </View>

                    {/* Search menu */}
                    <View style={ styles.menuWrapper }>
                        <TabbarButton routeName="SearchScreen" focused={ searchMenuFocused } />
                    </View>
                </Animated.View>
            </SafeAreaView>
        );
    }
}


export default GlobalTabBar;
