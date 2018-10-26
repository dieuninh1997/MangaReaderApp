import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback, TextInput } from 'react-native';
import { connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GlobalContainer from 'components/GlobalContainer';
import GlobalButton from 'components/GlobalButton';
import GlobalLoc from 'components/GlobalLoc';
import GlobalHeader from 'components/GlobalHeader';
import { navigate } from 'services/NavigationService';
import Images from 'assets/images';

import styles from 'styles/screens/SearchScreen/SearchScreen';


export class SearchScreen extends PureComponent {
    constructor(props) {
        super(props);
       

    }

    
    render() {
        
        return (
            <GlobalContainer style={ styles.container }>
                {/* header */}
                <GlobalHeader 
                    showLeftButton={ true }
                    showRightButton={ true }  
                    locKey="SearchScreen.title"
                />

                {/* input search text */}
                <View style={ styles.inputContainer }>
                    <TextInput
                        placeholder="Nhập từ khóa"
                        style={ styles.inputSearchText }
                        underlineColorAndroid="rgba(0, 0, 0, 0)"
                    />
                    <TouchableOpacity 
                        style={ styles.searchButton }    
                        onPress={()=>{}}
                    >
                        <GlobalLoc locKey="SearchScreen.searchButton"/>
                    </TouchableOpacity>
                </View>

                {/* separator */}
                <View style={ styles.separator }/>
                
                {/* lich su tim kiem */}
                <View style={ styles.historyContainer }>
                    <View style={ styles.titleSearchHistoryContainer }>
                        <GlobalLoc locKey="SearchScreen.searchHistory" style={ styles.title_searchHistory }/>
                        <TouchableOpacity>
                            <MaterialCommunityIcons name="delete-outline" style={ styles.clearHistoryIcon }/>
                        </TouchableOpacity>
                    </View>
                </View>
            </GlobalContainer>
        );
    }
}


export default SearchScreen;