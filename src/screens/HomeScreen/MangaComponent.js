import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';

import GlobalContainer from 'components/GlobalContainer';
import GlobalLoc from 'components/GlobalLoc';
import { navigate } from 'services/NavigationService';



import styles from 'styles/screens/HomeScreen/MangaComponent';

export class MangaComponent extends PureComponent {
    render() {
        return(
            <GlobalContainer>
                {/* title */}
                <View style={ styles.title_Container }>
                    <Entypo name="dot-single" style={ styles.title_Icon } />
                    <Text style={ styles.title_Text }>This is title</Text>
                </View>


                {/* list */}
                <View>
                    {
                        
                    }
                </View>
            </GlobalContainer>
        );
    }
}



export default MangaComponent;


   