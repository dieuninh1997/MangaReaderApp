import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from 'styles/components/GlobalTabBarIcon';


export const GlobalTabBarIcon = (props) => {
    const { routeName, focused } = props;

    let iconName = ''

    switch (routeName) {
        case 'HomeScreen'://truyen tranh
            iconName = 'md-home';
            break;

        case 'Follow'://theo doi
            iconName = 'ios-heart';
            break;

        case 'Account'://toi
            iconName = 'ios-contact';
            break;
    };

    return (
        <Icon name={ iconName } style={[styles.icon, focused ? styles.icon__active : null]} />
    );
};


GlobalTabBarIcon.propTypes = {
    routeName: PropTypes.string,
    focused: PropTypes.bool,
};


export default GlobalTabBarIcon;
