import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from 'styles/components/GlobalTabBarLabel';


export const GlobalTabBarLabel = (props) => {
    const { routeName, focused } = props;
    let tabName = '';
    switch (routeName) {
        case "HomeScreen":
            tabName = "Manga";
            break;
        case "FollowMain":
            tabName = "Follow";
            break;
        case "SettingScreen":
            tabName = 'Settings';
            break;
        case "SearchScreen":
            tabName = 'Search';
            break;
        default: tabName= routeName;
    }
    return (
        <Text style={[styles.label, focused ? styles.label__active : null]}>
            { tabName }
        </Text>
    );
};


GlobalTabBarLabel.propTypes = {
    routeName: PropTypes.string,
    focused: PropTypes.bool,
};


export default GlobalTabBarLabel;