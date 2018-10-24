import React from 'react';
import { WebView, SafeAreaView, View, Text, TouchableOpacity, StatusBar } from 'react-native';
import PureComponent from 'pure-component';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import GlobalContainer from 'components/GlobalContainer';
import GlobalHeader from 'components/GlobalHeader';
import GlobalLoc from 'components/GlobalLoc';
import { navigate } from 'services/NavigationService';
import { hitSlop } from 'configs';

import styles from 'styles/screens/WebViewScreen/WebViewScreen';


export class WebViewScreen extends PureComponent {

    render() {
        const { navigation, routeName } = this.props;

        const title = navigation.getParam('title');
        const url = navigation.getParam('url');

        return (
            <GlobalContainer style={ styles.container }>
                {/* header title */}
                <GlobalHeader
                    showLeftButton={ true }
                />

                <View style={ styles.flexOne }>
                    <WebView source={{ uri: url }} />
                </View>
            </GlobalContainer>
        );
    }
}

export default WebViewScreen;