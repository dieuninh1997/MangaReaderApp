import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { setLocale } from 'react-native-redux-i18n';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GlobalContainer from 'components/GlobalContainer';
import GlobalLoc from 'components/GlobalLoc';
import GlobalOption from 'components/GlobalOption';
import GlobalHeader from 'components/GlobalHeader';
import GlobalButton from 'components/GlobalButton';
import I18n from 'i18n';


import styles from 'styles/screens/AboutUsScreen/AboutUsScreen';


export class AboutUsScreen extends PureComponent {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <GlobalContainer>
                {/* title */}
                <GlobalHeader showLeftButton={ true } locKey="AboutUsScreen.title" />

            </GlobalContainer>
        );
    }
}


export default AboutUsScreen;