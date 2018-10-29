import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import { setLocale } from 'react-native-redux-i18n';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GlobalContainer from 'components/GlobalContainer';
import GlobalLoc from 'components/GlobalLoc';
import GlobalOption from 'components/GlobalOption';
import GlobalHeader from 'components/GlobalHeader';

import styles from 'styles/screens/LanguageSettingsScreen/LanguageSettingsScreen';


export class LanguageSettingsScreen extends PureComponent {

    constructor(props){
        super(props);
        this.rightArrowIcon = this.rightArrowIcon.bind(this);
    }

    rightArrowIcon(locale) {
        const { locale: currentLocale } = this.props;
        if (locale === currentLocale) {
            return ( 
                <MaterialCommunityIcons name="check" style={ styles.checkIcon } />
            );
        } else {
            return null;
        }
    }

    render() {
        return (
            <GlobalContainer>
                {/* title */}
                <GlobalHeader showLeftButton={ true } locKey="LanguageSettingsScreen.title" />
              
                {/* english */}
                <GlobalOption 
                    showSeparator={ true } 
                    rightComponent={ this.rightArrowIcon('en') } 
                    onPress={() => {
                        this.props.changeLanguage('en');
                    }}
                >
                    <GlobalLoc locKey="LanguageSettingsScreen.english" />
                </GlobalOption>

                {/* japanese */}
                <GlobalOption 
                    rightComponent={ this.rightArrowIcon('vn') } 
                    onPress={() => {
                        this.props.changeLanguage('vn');
                    }}
                >
                    <GlobalLoc locKey="LanguageSettingsScreen.vietnamese" />
                </GlobalOption>
            </GlobalContainer>
        );
    }
}

const mapStateToProps = ({ i18n }) => ({
    locale: i18n.locale,
});

const mapDispatchToProps = (dispatch) => ({
    changeLanguage: (locale) => {
        dispatch(setLocale(locale));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSettingsScreen);