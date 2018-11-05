import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';
import { setLocale } from 'react-native-redux-i18n';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import _ from 'lodash';

import GlobalContainer from 'components/GlobalContainer';
import GlobalLoc from 'components/GlobalLoc';
import GlobalOption from 'components/GlobalOption';
import GlobalHeader from 'components/GlobalHeader';
import GlobalButton from 'components/GlobalButton';
import GlobalTag from 'components/GlobalTag';
import Images from 'assets/images';
import I18n from 'i18n';
import  MangaList  from './MangaList';
import truyenConGai from './../../db/truyenConGai';

import styles from 'styles/screens/MangaScreen/MangaScreen';


export class MangaScreen extends PureComponent {

    constructor(props){
        super(props);
        
    }


    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id'); 
        const manga = _.find(truyenConGai, { 'id': id });
        const info = manga.comicChapters[0];
        const thumbnai = { uri: info.infoImage };

        console.log(id);
        console.log(manga);
        console.log(info);
        console.log(thumbnai);

        return (
            <GlobalContainer>
                {/* header */}
                <GlobalHeader showLeftButton={ true } showRightButton={ true }/>
                
                <View style={ styles.container }>
                    {/* tom tat truyen  */}
                    <View style={ styles.tomTatTruyen_container }>
                        {/* thumbnai */}
                        <Image style={ styles.thumbnai } source={ thumbnai } />

                        {/* info */}
                        <View style={ styles.info }>
                            {/* ten truyen */}
                            <Text style={ styles.mangaName }>{ info.infoName }</Text>
                            
                            {/* Ten tac gia */}
                            <GlobalLoc style={ styles.autherName } locKey="MangaScreen.autherName" name={ info.infoAuthor } />
                            
                            {/* Ten dich gia */}
                            <GlobalLoc style={ styles.translaterName } locKey="MangaScreen.translaterName" name="SkyBlue" />
                           
                           {/* tag the loai truyen */}
                            <GlobalTag data={ info.infoKind.split(" - ") } />

                            {/* Luot doc, thich */}
                            <View style={ styles.viewLike_container }>
                                {/* views */}
                                <View style={ styles.views_container }>
                                    <GlobalLoc style={ styles.views } locKey="MangaScreen.views" number={ info.infoView } />
                                </View>
                                {/* likes */}
                                <View style={ styles.likes }>
                                    <Text style={ styles.numberOfLike }>10945</Text>
                                    <SimpleLineIcons name="like" style={ styles.likeIcon } />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* danh sach truyen */}
                    <View style={ styles.listManga_container }>
                        <MangaList data={ truyenConGai } />

                    </View>
                </View>
            </GlobalContainer>
        );
    }
}



export default MangaScreen;