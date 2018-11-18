import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Animated, FlatList } from 'react-native';
import { setLocale } from 'react-native-redux-i18n';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';

import GlobalContainer from 'components/GlobalContainer';
import GlobalLoc from 'components/GlobalLoc';
import GlobalOption from 'components/GlobalOption';
import GlobalHeader from 'components/GlobalHeader';
import GlobalButton from 'components/GlobalButton';
import GlobalTag from 'components/GlobalTag';
import Images from 'assets/images';
import I18n from 'i18n';
import  MangaList  from 'screens/HomeScreen/MangaList';
import truyenConGai from './../../db/truyenConGai';
import { MenuNavigator } from './MangaMenuScreen';

import styles from 'styles/screens/MangaScreen/MangaScreen';


export class MangaScreen extends PureComponent {

    constructor(props){
        super(props);
        this.renderItemChapter = this.renderItemChapter.bind(this);
        this.mangaKeyExtractor = this.mangaKeyExtractor.bind(this);
    }

    renderItemChapter({item: chapter}) {
        return(
           <View style={ styles.rowItemChapter }>
               <Text style={ styles.item_soChuong }>{ chapter.comicChapter }</Text>
               <Text style={ styles.item_capNhat }>{ chapter.comicDateUpdate }</Text>
               <Text style={ styles.item_luotXem }>{ chapter.comicView }</Text>
           </View>
        );
    }

    mangaKeyExtractor(chapter) {
        return chapter.comicChapter;
    }

    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id'); 
        const manga = _.find(truyenConGai, { 'id': id });
        const info = manga.comicIntro;
        const chapters = manga.comicChapters;
        const thumbnai = { uri: info.infoImage };

        console.log(chapters);
        return (
            <GlobalContainer>
                {/* header */}
                <GlobalHeader showLeftButton={ true } showRightButton={ true }/>
                
                <View style={ styles.container }>
                    {/* tom tat truyen  */}
                    <View style={ styles.truyen_container }>
                        {/* thumbnai */}
                        <Image style={ styles.thumbnai } source={ thumbnai } />

                        {/* info */}
                        <View style={ styles.info }>
                            {/* ten truyen */}
                            <Text style={ styles.mangaName }>{ info.infoName }</Text>
                            
                            {/* Ten khác */}
                            <GlobalLoc style={ styles.otherMangaName } locKey="MangaScreen.otherMangaName" name={ !info.infoOtherName ? I18n.t('MangaScreen.updating') : info.infoOtherName } />

                            {/* Ten tac gia */}
                            <GlobalLoc style={ styles.autherName } locKey="MangaScreen.autherName" name={ !info.infoAuthor ? I18n.t('MangaScreen.updating') : info.infoAuthor  } />
                            
                            {/* Trang thai */}
                            <GlobalLoc style={ styles.status } locKey="MangaScreen.status" status={ info.infoStatus } />
                            

                           {/* tag the loai truyen */}
                            <GlobalTag data={ info.infoKind.split(" - ") } />

                            {/* Luot doc, thich */}
                            <View style={ styles.viewLike_container }>
                                {/* views */}
                                <View style={ styles.views_container }>
                                    <SimpleLineIcons name="eye" style={ styles.eyeIcon } />
                                    <GlobalLoc style={ styles.views } locKey="MangaScreen.views" number={ info.infoView } />
                                </View>
                                {/* likes */}
                                <View style={ styles.likes }>
                                    <Text style={ styles.numberOfLike }>{ info.infoFollow }</Text>
                                    <SimpleLineIcons name="like" style={ styles.likeIcon } />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* button show: tóm tắt, chapters */}
                    <View style={ styles.tomTatTruyen_button }>
                        <GlobalLoc locKey="MangaScreen.noiDung"/>
                        <MaterialCommunityIcons name="chevron-double-down" style={ styles.iconContent }/>
                    </View>
                    
                    {/* nội dung tóm tắt */}
                    <View style={ styles.tomTatTruyen_container }>
                        <Text>{ info.infoContent }</Text>
                    </View>

                    {/* danh sach chap */}
                    <View style={ styles.headerItemChapter }>
                        <GlobalLoc locKey="MangaScreen.soChuong" style={ styles.item_soChuong } />
                        <GlobalLoc locKey="MangaScreen.capNhat" style={ styles.item_capNhat } />
                        <GlobalLoc locKey="MangaScreen.luotXem" style={ styles.item_luotXem } />
                    </View>
                    
                    <FlatList
                        data={ chapters }
                        renderItem={ this.renderItemChapter }
                        keyExtractor={ this.mangaKeyExtractor }
                    />

                </>
            </GlobalContainer>
        );
    }
}



export default MangaScreen;