import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import { View, Text, TextInput, ScrollView, Dimensions  } from 'react-native';
import { setLocale } from 'react-native-redux-i18n';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from 'react-navigation';

import GlobalContainer from 'components/GlobalContainer';
import GlobalLoc from 'components/GlobalLoc';
import GlobalOption from 'components/GlobalOption';
import GlobalHeader from 'components/GlobalHeader';
import GlobalButton from 'components/GlobalButton';
import I18n from 'i18n';
import MangaSummarizeScreen from './MangaSummarizeScreen';
import  MangaList  from 'screens/HomeScreen/MangaList';

import styles from 'styles/screens/MangaScreen/MangaMenuScreen';


export const MenuNavigator = createMaterialTopTabNavigator(
    {
        'Top1': MangaSummarizeScreen,
        'Top2': MangaList,
    },
    {
        // navigationOptions: ({ navigation, screenProps }) => ({
        //     header: null,
        //     headerMode: 'none',
        //     tabBarVisible: true,
        //     tabBarLabel: () => {
        //         const { routeName } = navigation.state;
        //         return <Text>{ routeName }</Text>
        //     },
        // }),

        initialRouteName: 'Top1',
        tabBarPosition: 'top',
        animationEnabled: false,
        swipeEnabled: true,
        tabBarOptions: {
            activeTintColor: 'rgb(12,157,197)',
            inactiveTintColor: 'black',
            indicatorStyle: {
                backgroundColor: 'rgb(102,134,205)',
            },
            labelStyle: {
                tabStyle: {
                    height: 48,
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                style: {
                    backgroundColor: 'white',
                },
                statusBarStyle: 'light-content',
            }
        },
    }
);
