import React from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

import { navigate } from 'services/NavigationService';
import { hitSlop } from 'configs';
import GlobalLoc from 'components/GlobalLoc';

import styles from 'styles/components/GlobalHeader';


export const GlobalHeader = (props) => {
    const { showLeftButton, showRightButton, showSearchButton, locKey } = props;

    return (
        <SafeAreaView>
            <View style={ styles.container }>
                {/* Left button - Back */}
                <View style={ styles.leftButtonContainer }>
                    {showLeftButton ? (
                        <TouchableOpacity onPress={() => navigate()} hitSlop={ hitSlop }>
                            <Feather name="chevron-left" style={ styles.leftButton_Icon } />
                        </TouchableOpacity>
                    ) : null}
                </View>


                {/* Seperator  */}
                <View style={ styles.separator }>
                    {
                        locKey ? (
                            <GlobalLoc locKey={ locKey } style={ styles.titleTextStyle } />
                        ) : (
                            null
                    )}
                    
                </View>

                {/* Right button - Setting */}
                <View style={ styles.rightButtonContainer }>
                    {showRightButton ? (
                        <TouchableOpacity activeOpacity={ 0.65 } onPress={() => navigate('SettingScreen')} hitSlop={ hitSlop }>
                            <EvilIcons name="navicon" style={ styles.rightButton_Icon } />
                        </TouchableOpacity>
                    ) : null}
                </View>
            </View>
        </SafeAreaView>
    );
};


GlobalHeader.propTypes = {
    showLeftButton: PropTypes.bool,//back
    showRightButton: PropTypes.bool,//setting
    showSearchButton: PropTypes.bool,//search
    locKey: PropTypes.string, // Optional
};


export default GlobalHeader;
