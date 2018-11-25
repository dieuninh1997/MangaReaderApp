import React from 'react';
import PureComponent from 'pure-component';
import { connect } from 'react-redux';
import { View, Text, TextInput, ScrollView, Image, TouchableHighlight, Animated, FlatList, TouchableOpacity, AsyncStorage  } from 'react-native';
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
import { navigate } from 'services/NavigationService';
import GlobalService from 'services/GlobalService';

import styles from 'styles/screens/MangaScreen/MangaScreen';


export class MangaScreen extends PureComponent {

    state = {
        contentActive: false,
        isFollowing: false,
        listFollowing: []
    };

    constructor(props){
        super(props);
        this.renderItemChapter = this.renderItemChapter.bind(this);
        this.mangaKeyExtractor = this.mangaKeyExtractor.bind(this);
        this.onChapterPressed = this.onChapterPressed.bind(this);
        this.onFollowButtonPressed = this.onFollowButtonPressed.bind(this);
    }

    // async componentWillMount(){
    //     const { navigation } = this.props;
    //     const manga = navigation.getParam('manga');

    //     let value = await AsyncStorage.getItem('listFollowing'); 
    //     // console.log(value);
    //     if(value && value.length > 0){
    //         this.setState({listFollowing: value});
    //        let index = _.findIndex(value, { 'id': manga.id });
    //        if(index != -1){
    //            this.setState({isFollowing: true});
    //        }
    //     }
    // } 

    onFollowButtonPressed() {
        // const { isFollowing, listFollowing } = this.state;
        // const { navigation } = this.props;
        // const manga = navigation.getParam('manga');
        // console.log(manga);

        // if(!isFollowing){
        //     this.setState({isFollowing: true});
        //    await AsyncStorage.setItem('listFollowing', {...listFollowing, manga});
        //     GlobalService.showErrorToast(I18n.t('MangaScreen.alert_start_following'));
            
        // }else{
        //     this.setState({isFollowing: false});
        //     GlobalService.showErrorToast(I18n.t('MangaScreen.alert_stop_following'));
        // }
        // let db = await AsyncStorage.getItem('listFollowing'); 
        // console.log('list')
        // console.log(listFollowing);
        // console.log('db');
        // console.log(db);
    }

    onChapterPressed(chapter) {
        const { navigation } = this.props;
        const dataId = navigation.getParam('dataId'); 
        const manga = navigation.getParam('manga');

        navigate('MangaDetailScreen', { dataId: dataId, mangaId: manga.id, chapter: chapter })
    }

    renderItemChapter({item: chapter}) {
        return(
            <TouchableHighlight
                underlayColor='#E1DCDC'
                onPress={ () => this.onChapterPressed(chapter) }
            >
                <View style={ styles.rowItemChapter }>
                    <Text style={ styles.item_soChuong }>{ chapter.comicChapter }</Text>
                    <Text style={ styles.item_capNhat }>{ chapter.comicDateUpdate }</Text>
                    {/* <Text style={ styles.item_luotXem }>{ chapter.comicView }</Text> */}
                </View>
            </TouchableHighlight>
        );
    }

    mangaKeyExtractor(chapter) {
        return chapter.comicChapter;
    }

    activeContent(title) {
        switch(title) {
            case 'content':
                this.setState({contentActive: true});
                break;
            case 'chapters':
                this.setState({contentActive: false});
                break;
        }
    }

    render() {
        const { isFollowing } = this.state;
        const { navigation } = this.props;
        const manga = navigation.getParam('manga');

        const info = manga.comicIntro;
        const chapters = manga.comicChapters;
        const thumbnai = { uri: info.infoImage };
        const { contentActive } = this.state;
        
        return (
            <GlobalContainer>
                {/* header */}
                <GlobalHeader 
                    showLeftButton={ true } 
                    showRightButton={ true }
                    children ={ <Text style={ styles.title_header }>{info.infoName}</Text> }
                />
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

                    {/* menu tab */}
                    <View style={ styles.menuTabContainer }>
                        {/* tab content */}
                        <TouchableOpacity
                            style={ styles.menuTabItem }
                            onPress={()=>this.activeContent('content')}
                        >
                            <View >
                                <GlobalLoc 
                                    locKey="MangaScreen.content"
                                    style={ contentActive ? styles.contentActive: styles.contentNotActive }
                                />
                            </View>
                        </TouchableOpacity>

                        {/* separator */}
                        <View style={{ width: 1, backgroundColor: 'gray'}}/>

                        {/* tab chapters */}
                        <TouchableOpacity
                            style={ styles.menuTabItem }
                            onPress={()=>this.activeContent('chapters')}
                        >
                            <View>
                                <GlobalLoc 
                                    locKey="MangaScreen.menu"
                                    style={ contentActive ? styles.contentNotActive: styles.contentActive }
                                />
                            </View>
                            
                        </TouchableOpacity>
                    </View>
                   
                    <View style={{flex: 1}}>
                    {
                        contentActive ? (
                            <View>
                                <View style={ styles.tomTatTruyen_button }>
                                    {/* title noi dung tóm tắt */}
                                    <GlobalLoc locKey="MangaScreen.noiDung" style={{ marginVertical: 5 }}/>
                                    <MaterialCommunityIcons name="chevron-double-down" style={ styles.iconContent }/>
                                </View>
                                <View style={ styles.tomTatTruyen_container }>
                                    {/* nội dung tóm tắt */}                    
                                    <Text>{ info.infoContent }</Text>
                                </View>
                            </View>
                        ) : (
                            <View style={ styles.tabListChapterContainer }>
                                <View style={ styles.headerItemChapter }>
                                {/* danh sach chap */}
                                    <GlobalLoc locKey="MangaScreen.soChuong" style={ styles.headerItem_soChuong } />
                                    <GlobalLoc locKey="MangaScreen.capNhat" style={ styles.headerItem_capNhat } />
                                    {/* <GlobalLoc locKey="MangaScreen.luotXem" style={ styles.headerItem_luotXem } /> */}
                                </View>

                                <FlatList
                                    data={ chapters }
                                    renderItem={ this.renderItemChapter }
                                    keyExtractor={ this.mangaKeyExtractor }
                                />
                            </View>
                        )
                    }
                    </View>
                </View>

                 {/* theo doi button */}
                 <View style={ styles.buttonContainer }>
                    <GlobalButton
                        style={ styles.buttonFollow }
                        type="outlinePrimary"
                        locKey={isFollowing ? "MangaScreen.following" : "MangaScreen.button_follow"}
                        onPress={this.onFollowButtonPressed }
                    />
                </View>
            </GlobalContainer>
        );
    }
}



export default MangaScreen;