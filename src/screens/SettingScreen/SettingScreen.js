import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, TouchableHighlight, ScrollView, InteractionManager } from 'react-native';
import { connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';


import GlobalContainer from 'components/GlobalContainer';
import GlobalHeader from 'components/GlobalHeader';
import GlobalLoc from 'components/GlobalLoc';
import GlobalOption from 'components/GlobalOption';
import { navigate } from 'services/NavigationService';
import GlobalService from 'services/GlobalService';
import { Colors } from 'styles/variables';

import styles from 'styles/screens/SettingScreen/SettingScreen';


export class SettingScreen extends PureComponent {

    state = {
        shouldProtectedByPasscode: false,
    }

    constructor(props) {
        super(props);
        this.rightArrowIcon = this.rightArrowIcon.bind(this);
       
        this.goToLanguageSettings = this.goToLanguageSettings.bind(this);
        this.goToFeedbackScreen = this.goToFeedbackScreen.bind(this);
        this.goToAboutUsScreen = this.goToAboutUsScreen.bind(this);
    }

    rightArrowIcon() {
        return ( 
            <MaterialCommunityIcons name="chevron-right" style={ styles.arrow } />
        );
    }

    goToLanguageSettings() {
        navigate('LanguageSettingsScreen');

    }

    goToFeedbackScreen() {
        navigate('FeedbackScreen');
    }

    goToAboutUsScreen() {

    }

    render() {
        
        return (
            <GlobalContainer style={ styles.container }>
                {/* title */}
                <GlobalHeader showLeftButton={ true } locKey="SettingScreen.title"/>
              
                <ScrollView>
                    {/* language setting */}
                    <GlobalOption
                        onPress={ this.goToLanguageSettings }
                        rightComponent={ this.rightArrowIcon() }
                        showSeparator={ true }
                    >
                        <View style={ styles.flexDirectionRow }>
                            <Entypo name="language" style={ styles.icon } />
                            <GlobalLoc locKey="SettingScreen.languagesSetting" />
                        </View>
                    </GlobalOption>
                    
                    {/* Feedback */}
                    <GlobalOption 
                        onPress={ this.goToFeedbackScreen }
                        rightComponent={ this.rightArrowIcon() }
                        showSeparator={ true }
                    >
                        <View style={ styles.flexDirectionRow }>
                            <MaterialCommunityIcons name="message-text-outline" style={ styles.icon } />
                            <GlobalLoc locKey="SettingScreen.feedback" />
                        </View>
                    </GlobalOption>


                    {/* about us */}
                    <GlobalOption 
                        onPress={ this.goToAboutUsScreen }
                        rightComponent={ this.rightArrowIcon() }
                    >
                        <View style={ styles.flexDirectionRow }>
                            <MaterialCommunityIcons name="information-outline" style={ styles.icon } />
                            <GlobalLoc locKey="SettingScreen.aboutUs" />
                        </View>
                    </GlobalOption>
                </ScrollView>
            </GlobalContainer>
        );
    }
}


export default SettingScreen;
