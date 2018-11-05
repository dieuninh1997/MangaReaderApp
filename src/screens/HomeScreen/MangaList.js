import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';
// var Crawler = require("crawler");

import GlobalContainer from 'components/GlobalContainer';
import GlobalLoc from 'components/GlobalLoc';
import { navigate } from 'services/NavigationService';
import MangaItem from './MangaItem';

import styles from 'styles/screens/HomeScreen/MangaList';

export class MangaList extends PureComponent {
    

    constructor(props) {
        super(props);
        this.renderItemManga = this.renderItemManga.bind(this);
        this.mangaKeyExtractor = this.mangaKeyExtractor.bind(this);
    }

    renderItemManga({item: manga}) {
        return(
           <MangaItem manga={ manga } />
        );
    }

    mangaKeyExtractor(manga) {
        return manga.comicTitle;
    }

    render() {
        const data =  this.props;
        return(
            <GlobalContainer>
                {/* title */}
                {/* <View style={ styles.title_Container }>
                    <Entypo name="dot-single" style={ styles.title_Icon } />
                    <Text style={ styles.title_Text }>This is title</Text>
                </View> */}


                {/* list */}
                <FlatList
                    horizontal 
                    data={ data }
                    renderItem={ this.renderItemManga }
                    keyExtractor={ this.mangaKeyExtractor }
                />
            </GlobalContainer>
        );
    }
}


MangaList.propTypes = {
    data: PropTypes.array//list
};

export default MangaList;


   