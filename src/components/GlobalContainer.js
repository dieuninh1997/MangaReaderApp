import React from 'react';
import { SafeAreaView, View, KeyboardAvoidingView, Platform } from 'react-native';

import styles from 'styles/components/GlobalContainer';


export const GlobalContainer = (props) => {
    const { style, ...otherProps } = props;
    return (
        <View style={[styles.container, style || {}]} { ...otherProps }>
            { props.children }
        </View>
    );
};


export default GlobalContainer;
