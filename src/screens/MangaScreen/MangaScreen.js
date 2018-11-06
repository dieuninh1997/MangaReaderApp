import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, Animated } from 'react-native';
import { setLocale } from 'react-native-redux-i18n';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import _ from 'lodash';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

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

                    {/* tab: tóm tắt, chapters */}

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