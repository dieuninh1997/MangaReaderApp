import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from 'styles/components/GlobalTabBarLabel';


export const GlobalTabBarLabel = (props) => {
    const { routeName, focused } = props;
    return (
        <Text style={[styles.label, focused ? styles.label__active : null]}>
            { routeName }
        </Text>
    );
};


GlobalTabBarLabel.propTypes = {
    routeName: PropTypes.string,
    focused: PropTypes.bool,
};


export default GlobalTabBarLabel;
