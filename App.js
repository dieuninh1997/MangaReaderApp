import React, { PureComponent } from 'react';
import { View, ImageBackground, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from './src/routes';
import './src/i18n';
import store, { persistor } from 'store';
import GlobalSpinner from 'components/GlobalSpinner';
// import GlobalModal from 'components/GlobalModal';
import GlobalTabBar from 'components/GlobalTabBar';
import Images from 'assets/images';


import styles from 'styles/app';


export default class App extends PureComponent {
    render() {
        return (
            <Provider store={ store }>
                 {/* Content */}
                <View style={ styles.container }>
                    <Routes />
                    
                    <GlobalTabBar />

                    <GlobalSpinner />
                    {/* <GlobalModal /> */}
                </View>
            </Provider>
        );
    }
}
