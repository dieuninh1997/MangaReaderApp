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


import styles from 'styles/screens/FeedbackScreen/FeedbackScreen';


export class FeedbackScreen extends PureComponent {

    constructor(props){
        super(props);
    }


    render() {
        return (
            <GlobalContainer>
                {/* title */}
                <GlobalHeader showLeftButton={ true } locKey="FeedbackScreen.title" />

                {/* guide */}
                <View style={ styles.feedback_guide }>
                    <GlobalLoc locKey="FeedbackScreen.feedbackGuide"/>
                </View>

                <ScrollView>
                    {/* input */}
                    <View style={ styles.inputContainer }>
                        <TextInput
                            placeholder={ I18n.t('FeedbackScreen.hintInputFeedback') }
                            style={ styles.inputSearchText }
                            underlineColorAndroid="rgba(0, 0, 0, 0)"
                            multiline
                        />

                    </View>

                    {/* button */}
                    <View style={ styles.buttonContainer }>
                        <GlobalButton
                            type='3dLightenPrimary'
                            locKey="FeedbackScreen.send"
                            onPress={()=>{}}
                        />
                    </View>
                </ScrollView>
            </GlobalContainer>
        );
    }
}


export default FeedbackScreen;