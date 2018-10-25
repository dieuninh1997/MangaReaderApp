import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import { setLocale } from 'react-native-redux-i18n';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GlobalContainer from 'components/GlobalContainer';
import GlobalLoc from 'components/GlobalLoc';
import GlobalOption from 'components/GlobalOption';

import styles from 'styles/screens/LanguageSettingsScreen/LanguageSettingsScreen';


export class LanguageSettingsScreen extends PureComponent {

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
                <GlobalContainer.Header showLeftButton={ true } />
                <GlobalLoc style={ styles.title } locKey="LanguageSettingsScreen.title" />
              
                <GlobalContainer.Content>
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
                </GlobalContainer.Content>
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