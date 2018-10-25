import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import RNSplashScreen from 'react-native-splash-screen';

import GlobalContainer from 'components/GlobalContainer';
import GlobalService from 'services/GlobalService';
import { navigate } from 'services/NavigationService';
import I18n from 'i18n';

import styles from 'styles/screens/SplashScreen/SplashScreen';


export class SplashScreen extends PureComponent {

    async componentDidMount() {
        const { locale } = this.props;
        I18n.locale = locale;

        this.redirect();
    }

    async redirect() {

        await sleep(100);
    
        navigate('HomeScreen', {}, true);

        await sleep(100);
        RNSplashScreen.hide();
    }

    render() {
        return (
            <GlobalContainer style={ styles.container }>
                <Text style={ styles.appName }>
                    Manga Reader
                </Text>
            </GlobalContainer>
        );
    }
}


const mapStateToProps = ({ i18n, global }) => ({
    locale: i18n.locale,
    isLanguageSet: global.isLanguageSet,
});

export default connect(mapStateToProps)(SplashScreen);
