import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import { View, Text, TextInput, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
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


import styles from 'styles/screens/MangaScreen/MangaDetailScreen';

export class MangaDetailScreen extends PureComponent {
    state = {
        disableButtonBackChapter: true,
        disableButtonNextChapter: false,
        type : 'Select chapter'
    };

    constructor(props){
        super(props);
    }

    _onPressOrderTypeItem(item) {
        this.setState({ type: item.comicChapter });
        console.log(this.state);
    }

    onNextChapterPressed() {
        const { type } = this.state;
        // if(type)
    }

    onBackChapterPressed() {

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
                        onPress={this.onBackChapterPressed()}
                    >
                        <MaterialCommunityIcons name="chevron-left-box" style={[styles.iconBackNextChapter, disableButtonBackChapter ? styles.iconDisable : styles.iconEnable]}/>
                    </TouchableOpacity>

                    {/* selector chapter */}
                    <View style={ styles.selectorChapterContainer }>
                        <GlobalDropdown
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
                        />
                    </View>

                    {/* button next */}
                    <TouchableOpacity 
                        disabled={ disableButtonNextChapter }
                        onPress={this.onNextChapterPressed()}
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
                                    maximumZoomScale={3}
                                    androidScaleType="center"
                                    onLoad={() => console.log("Image loaded!")}
                                    style={ styles.image }
                                    androidScaleType="fitXY"
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