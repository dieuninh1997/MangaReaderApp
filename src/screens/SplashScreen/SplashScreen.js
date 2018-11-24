import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import RNSplashScreen from 'react-native-splash-screen';

import GlobalContainer from 'components/GlobalContainer';
import GlobalService from 'services/GlobalService';
import { navigate } from 'services/NavigationService';
import I18n from 'i18n';
import Images from 'assets/images';

import styles from 'styles/screens/SplashScreen/SplashScreen';


export class SplashScreen extends PureComponent {

    async componentDidMount() {
        const { locale } = this.props;
        I18n.locale = locale;

        this.redirect();
    }

    async redirect() {

        
        await sleep(100);
        RNSplashScreen.hide();
        // await sleep(100);
    
        navigate('HomeScreen', {}, true);

    }

    render() {
        return (
            // <View>
            //     <Image
            //         resizeMode='cover'
            //         style={styles.logoStyle}
            //         source={require('../../assets/images/original.gif')}
            //     />
            // </View>
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
