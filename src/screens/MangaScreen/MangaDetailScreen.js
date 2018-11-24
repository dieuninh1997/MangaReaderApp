import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import { View, Text, TextInput, ScrollView, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { setLocale } from 'react-native-redux-i18n';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';
import PhotoView from 'react-native-photo-view';

import GlobalContainer from 'components/GlobalContainer';
import GlobalLoc from 'components/GlobalLoc';
import GlobalOption from 'components/GlobalOption';
import GlobalHeader from 'components/GlobalHeader';
import GlobalButton from 'components/GlobalButton';
import GlobalDropdown from 'components/GlobalDropdown';
import I18n from 'i18n';
import truyenConGai from '../../db/truyenConGai';
import truyenConTrai from '../../db/truyenConTrai';
import truyenRomance from '../../db/truyenRomance';
import { navigate } from 'services/NavigationService';
import GlobalService from 'services/GlobalService';

import styles from 'styles/screens/MangaScreen/MangaDetailScreen';

export class MangaDetailScreen extends PureComponent {
    state = {
        disableButtonBackChapter: false,
        disableButtonNextChapter: false,
        type : 'Select chapter'
    };

    constructor(props){
        super(props);
    }

    _onPressOrderTypeItem(item) {
        
    }

    onChapterPressed(type) {
        const { navigation } = this.props;
        const chapter = navigation.getParam('chapter'); 
        const dataId = navigation.getParam('dataId');    
        const mangaId = navigation.getParam('mangaId');    
        let data = [];
        switch(dataId) {
            case 0:
                data=truyenConGai;
                break;
            case 1:     
                data=truyenConTrai;
                break;
            case 3: 
                data=truyenRomance;
                break;
        }
        const manga =  _.find(data, { 'id': mangaId });
        const chapters = manga.comicChapters;
        let indexCur = _.findIndex(chapters, { 'comicChapter': chapter.comicChapter });
        // console.log('indexCur '+indexCur);
        // console.log(type);


        if (type === 'back') {//next
            if (indexCur + 1 < chapters.length ){
                const nextChapter = chapters[indexCur+1];
                navigate('MangaDetailScreen', { dataId: dataId, mangaId: manga.id, chapter: nextChapter })
            }
            else {
                GlobalService.showErrorToast(I18n.t('MangaDetailScreen.alert_end_chapter'));
            }
        } else {
            if (indexCur - 1 >= 0 ){
                const backChapter = chapters[indexCur-1];
                navigate('MangaDetailScreen', { dataId: dataId, mangaId: manga.id, chapter: backChapter })
            }
            else {
                GlobalService.showErrorToast(I18n.t('MangaDetailScreen.alert_end_chapter'));
            }
        }
    }

    render() {
        const { disableButtonBackChapter, disableButtonNextChapter } = this.state;        
        const { navigation } = this.props;
        const chapter = navigation.getParam('chapter'); 
        const dataId = navigation.getParam('dataId');
        const mangaId = navigation.getParam('mangaId');


        let data = [];
        switch(dataId) {
            case 0:
                data=truyenConGai;
                break;
            case 1:     
                data=truyenConTrai;
                break;
            case 3: 
                data=truyenRomance;
                break;
        }
        const chapterImages = chapter.comicImages;
        const manga =  _.find(data, { 'id': mangaId });
        const chapters = manga.comicChapters;

        let types = [];
        chapters.forEach(item => {
          types.push(item.comicChapter);
        });

        return (
            <GlobalContainer>
                {/* title */}
                <GlobalHeader 
                    showLeftButton={ true } 
                    locKey="MangaDetailScreen.title" 
                    children ={ <Text style={ styles.title_header }>{manga.comicIntro.infoName}</Text> }
                />

                {/* button next chapter */}
                <View style={ styles.nextChapterContainer }>
                    {/* button back*/}
                    <TouchableOpacity 
                        disabled={ disableButtonBackChapter }
                        onPress={()=>this.onChapterPressed('back')}
                    >
                        <MaterialCommunityIcons name="chevron-left-box" style={[styles.iconBackNextChapter, disableButtonBackChapter ? styles.iconDisable : styles.iconEnable]}/>
                    </TouchableOpacity>

                    {/* selector chapter */}
                    <View style={ styles.selectorChapterContainer }>
                        <Text style={ styles.nameChapter }>{chapter.comicChapter}</Text>
                        {/* <GlobalDropdown
                            options={ types }
                            style={ styles.viewBtnFilter }
                            textStyle={ styles.btnFilter }
                            viewButton={ styles.viewButtonFilter }
                            defaultValue={ this.state.type }
                            animated={ true }
                            dropdownStyle={ styles.viewDropDown }
                            dropdownTextStyle={ styles.dropDownTextStyle }
                            showsVerticalScrollIndicator={ false }
                            dropdownTextHighlightStyle={ styles.dropDownTextHighlightStyle }
                            onSelect={(rowID) => {
                                this._onPressOrderTypeItem(chapters[rowID])
                            }}
                        /> */}
                    </View>

                    {/* button next */}
                    <TouchableOpacity 
                        disabled={ disableButtonNextChapter }
                        onPress={()=>this.onChapterPressed('next')}
                    >
                        <MaterialCommunityIcons name="chevron-right-box" style={[styles.iconBackNextChapter, disableButtonNextChapter ? styles.iconDisable : styles.iconEnable]}/>
                    </TouchableOpacity>
                </View>


                <ScrollView>
                    {/* images */}
                    {chapterImages.map((img, index)=>{
                        return (
                            <View style={ styles.imageContainer } key={ index }>
                                <PhotoView
                                    source={{ uri: img }}
                                    minimumZoomScale={0.5}
                                    maximumZoomScale={10}
                                    androidScaleType="center"
                                    onLoad={() => console.log("Image loaded!")}
                                    style={ styles.image }
                                    androidScaleType="fitStart"
                                />
                                {/* <Image
                                    resizeMode={ 'cover' }
                                    style={ styles.image }
                                    source={{ uri: img }}
                                /> */}
                            </View>
                        )
                    })}
                </ScrollView>
                
            </GlobalContainer>
        );
    }
}


export default MangaDetailScreen;