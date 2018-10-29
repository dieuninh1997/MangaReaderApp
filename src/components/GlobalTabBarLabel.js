import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import I18n from 'i18n';

import styles from 'styles/components/GlobalTabBarLabel';


export const GlobalTabBarLabel = (props) => {
    const { routeName, focused } = props;
    let tabName = '';
    switch (routeName) {
        case "HomeScreen":
            tabName = I18n.t('GlobalTabBarLabel.Manga');
            break;
        case "FollowMain":
            tabName = I18n.t('GlobalTabBarLabel.Follow');
            break;
        case "SettingScreen":
            tabName = I18n.t('GlobalTabBarLabel.Settings');
            break;
        case "SearchScreen":
            tabName = I18n.t('GlobalTabBarLabel.Search');
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
