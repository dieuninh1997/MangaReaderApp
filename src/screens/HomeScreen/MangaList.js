import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';

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
        const { dataId } = this.props;
        return(
           <MangaItem manga={ manga } direction={'horizontal'} dataId={ dataId } />
        );
    }

    mangaKeyExtractor(manga) {
        return manga.id;
    }

    render() {
        const { data } =  this.props;
        
        // console.log(data.length);
        return(
            <GlobalContainer>
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
    data: PropTypes.array,//list
    dataId: PropTypes.number
};

export default MangaList;


   