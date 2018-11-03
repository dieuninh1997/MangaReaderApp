import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';
var Crawler = require("crawler");

import GlobalContainer from 'components/GlobalContainer';
import GlobalLoc from 'components/GlobalLoc';
import { navigate } from 'services/NavigationService';
import MangaItem from './MangaItem';

import styles from 'styles/screens/HomeScreen/MangaList';

export class MangaList extends PureComponent {

    data = [];

    constructor(props) {
        super(props);
        this.renderItemManga = this.renderItemManga.bind(this);
        this.mangaKeyExtractor = this.mangaKeyExtractor.bind(this);
        this.getTransactions = this.getTransactions.bind(this);

        this.getTruyen(this.props.url).then(data=>{
            this.data = data;
        });
    }

    async getTruyen(url){
        var c = new Crawler({
            maxConnections: 10,
            // This will be called for each crawled page
            callback: function (error, res, done) {
              done();
            }
        });
        return new Promise((resolve,reject)=>{
            c.queue([{
                uri: url,
                jQuery: true,
            
                // The global callback won't be called
                callback: function (error, res, done) {
                    if (error) {
                        console.log(error);
                    } else {
                        const $ = res.$;
                        let list = [];
                        $('.ModuleContent .items .row .item').each(function () {
                            const comicTittle = $(this).find('figcaption h3 a').text();
                            const comicLink = $(this).find('figcaption h3 a').attr('href');
                            const comicImage = $(this).find('.image a img').attr('data-original');
                            const comicView = $(this).find('.image span').text().trim().split(" ")[0];
                    
                            list.push({
                                comicTittle,
                                comicLink,
                                comicImage,
                                comicView
                            });
                            resolve(list);
                        });
                    }
                    done();
                }
            }])
            
        });
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
        
        return(
            <GlobalContainer>
                {/* title */}
                <View style={ styles.title_Container }>
                    <Entypo name="dot-single" style={ styles.title_Icon } />
                    <Text style={ styles.title_Text }>This is title</Text>
                </View>


                {/* list */}
                <FlatList 
                    data={ this.data }
                    renderItem={ this.renderItemManga }
                    keyExtractor={ this.mangaKeyExtractor }
                />
            </GlobalContainer>
        );
    }
}


MangaList.propTypes = {
    url: PropTypes.string//list
};

export default MangaList;


   