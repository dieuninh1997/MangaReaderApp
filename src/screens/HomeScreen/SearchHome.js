import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';

import { navigate } from 'services/NavigationService';

import styles from 'styles/screens/HomeScreen/SearchHome';



export class SearchHome extends PureComponent {
    render() {
        const { navigation } = this.props;
    
        return (
            <TouchableWithoutFeedback
                onPress={() => navigate('SearchScreen')}
            >
                <View style={ styles.viewIconSearch }>
                    <Octicons name="search" style={ styles.iconSearch } />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
export default SearchHome;