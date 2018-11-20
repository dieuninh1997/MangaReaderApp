import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import { View, Text, TextInput, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import { setLocale } from 'react-native-redux-i18n';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import GlobalContainer from 'components/GlobalContainer';
import GlobalLoc from 'components/GlobalLoc';
import GlobalOption from 'components/GlobalOption';
import GlobalHeader from 'components/GlobalHeader';
import GlobalButton from 'components/GlobalButton';
import GlobalDropdown from 'components/GlobalDropdown';
import I18n from 'i18n';


import styles from 'styles/screens/MangaScreen/MangaDetailScreen';


export class MangaDetailScreen extends PureComponent {
    state = {
        disableButtonBackChapter: true,
        disableButtonNextChapter: false,
    };

    constructor(props){
        super(props);
    }


    render() {
        const { navigation } = this.props;
        const chapter = navigation.getParam('chapter'); 
        const chapterImages = chapter.comicImages;
        const { disableButtonBackChapter, disableButtonNextChapter } = this.state;


        return (
            <GlobalContainer>
                {/* title */}
                <GlobalHeader showLeftButton={ true } locKey="MangaDetailScreen.title" />

                {/* button next chapter */}
                <View style={ styles.nextChapterContainer }>
                    {/* button back*/}
                    <TouchableOpacity 
                        disabled={ disableButtonBackChapter }
                        onPress={()=>{}}
                    >
                        <MaterialCommunityIcons name="chevron-left-box" style={[styles.iconBackNextChapter, disableButtonBackChapter ? styles.iconDisable : styles.iconEnable]}/>
                    </TouchableOpacity>

                    {/* selector chapter */}
                    <View>
                        <GlobalDropdown
                            options={ types }
                            style={ styles.viewBtnFilter }
                            textStyle={ styles.btnFilter }
                            viewButton={ styles.viewButtonFilter }
                            defaultValue={ this._getTypeLabel() }
                            animated={ true }
                            dropdownStyle={ styles.viewDropDown }
                            dropdownTextStyle={ styles.dropDownTextStyle }
                            showsVerticalScrollIndicator={ false }
                            dropdownTextHighlightStyle={ styles.dropDownTextHighlightStyle }
                            onSelect={(rowID) => {
                                this._onPressOrderTypeItem(this.types[rowID])
                            }}
                        />
                    </View>

                    {/* button next */}
                    <TouchableOpacity 
                        disabled={ disableButtonNextChapter }
                        onPress={()=>{}}
                    >
                        <MaterialCommunityIcons name="chevron-right-box" style={[styles.iconBackNextChapter, disableButtonNextChapter ? styles.iconDisable : styles.iconEnable]}/>
                    </TouchableOpacity>
                </View>


                <ScrollView>
                    {/* images */}
                    {chapterImages.map((img, index)=>{
                        return (
                            <View style={ styles.imageContainer } key={ index }>
                                <Image
                                    // resizeMode={ 'cover' }
                                    style={ styles.image }
                                    source={{ uri: img }}
                                />
                            </View>
                        )
                    })}
                </ScrollView>
                
            </GlobalContainer>
        );
    }
}


export default MangaDetailScreen;