import React from 'react';
import { View, Text, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { StackActions } from 'react-navigation';

import GlobalHeader from 'components/GlobalHeader';
import GlobalLoc from 'components/GlobalLoc';
import GlobalContainer from 'components/GlobalContainer';

import styles from 'styles/components/GlobalFollowTabBar';


export const GlobalFollowTabBar = (props) => {
    const { navigation, jumpToIndex, getOnPress } = props;

    const { routes } = navigation.state;
    const previousScene = routes[navigation.state.index];

    const handleTabPress = index => {
        const currentIndex = navigation.state.index;
    
        if (currentIndex === index) {
            let childRoute = navigation.state.routes[index];
            if (childRoute.hasOwnProperty('index') && childRoute.index > 0) {
                navigation.dispatch(
                    StackActions.popToTop({ key: childRoute.key })
                );
            }
        } else {
            jumpToIndex(index);
        }
    };

    return (
        <SafeAreaView>
            <View style={ styles.container }>
                {/* <GlobalHeader showRightButton={ true } /> */}
                
                <View style={ styles.tabBar_Container }>
                    {routes.map((route, index) => {
                        const focused = index === navigation.state.index;
                        const scene = { route, index, focused };
                        const onPress = getOnPress(previousScene, scene);

                        let translationKey = '';
                        switch (route.routeName) {
                            case 'FollowScreen':
                                translationKey = 'GlobalFollowTabBar.FollowTab';
                                break;
                            case 'HistoryScreen':
                                translationKey = 'GlobalFollowTabBar.FollowHistoryTab';
                                break;
                            case 'DownloadScreen':
                                translationKey = 'GlobalFollowTabBar.FollowDownloadTab';
                                break;
                        }

                        return (
                            <TouchableWithoutFeedback
                                key={ route.key }
                                onPress={() =>
                                    onPress
                                        ? onPress({
                                            previousScene,
                                            scene,
                                            jumpToIndex,
                                            defaultHandler: handleTabPress,
                                            })
                                        : handleTabPress(index)
                                }
                            >
                                <View style={[styles.tabBar_Tab, focused ? styles.tabBar_Tab__active : null, index === 0 ? styles.tabBar_Tab__left : styles.tabBar_Tab__right]}>
                                    <GlobalLoc
                                        style={[styles.tabBar_Label, focused ? styles.tabBar_Label__active : null]}
                                        locKey={ translationKey }
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    })}
                </View>
            </View>
        </SafeAreaView>
    );
};


export default GlobalFollowTabBar;