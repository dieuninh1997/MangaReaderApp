import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, ScrollView, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import GlobalContainer from 'components/GlobalContainer';
import GlobalButton from 'components/GlobalButton';
import GlobalLoc from 'components/GlobalLoc';
import GlobalHeader from 'components/GlobalHeader';
import { navigate } from 'services/NavigationService';
import Images from 'assets/images';
import  MangaList  from './MangaList';
import BannerHome from './BannerHome';
import truyenConGai from './../../db/truyenConGai';
import truyenConTrai from './../../db/truyenConTrai';
import truyenRomance from './../../db/truyenRomance';

import styles from 'styles/screens/HomeScreen/HomeScreen';


export class HomeScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.onMenuBrowserButtonPressed = this.onMenuBrowserButtonPressed.bind(this);
        this.goToDetailScreen = this.goToDetailScreen.bind(this);
        this.openCapNhatMoi = this.openCapNhatMoi.bind(this);
    }

    onMenuBrowserButtonPressed() {
        navigate('WebViewScreen', {url: 'http://www.nettruyen.com/', title: "Browser"});
    }

    goToDetailScreen(truyen) {
        // navigate('DetailScreen', {truyen: truyen});
    }

    openCapNhatMoi() {
        navigate('NewUpdateScreen');
    }


    render() {
        return (
            <GlobalContainer style={ styles.container }>
                {/* header */}
                {/* <GlobalHeader 
                    showRightButton={ true }  
                    locKey="HomeScreen.title"
                /> */}

                <ScrollView>
                    {/* swiper */}
                    <View style={ styles.viewBanner }>
                        <BannerHome navigation={ this.props.navigation }/>
                    </View>
                    {/* menu */}
                    <View style={ styles.menuContainer }>
                        {/* Bang xep hang */}
                        <TouchableOpacity onPress={ this.onMenuBrowserButtonPressed }>
                            <View style={[ styles.menuButtonContainer, styles.menuRanking ]}>
                                <View style={ styles.menuImageContainer }>
                                    <Image style={ styles.menuImage } source={ Images.menu['ic_ranking'] } />
                                </View>
                                <GlobalLoc style={ styles.menuTitle } locKey="HomeScreen.menuBangXepHang"/>
                            </View>
                        </TouchableOpacity>

                        {/* Phan loai */}
                        <TouchableOpacity onPress={()=>{}}>
                            <View style={[ styles.menuButtonContainer, styles.menuPhanLoai ]}>
                                <View style={ styles.menuImageContainer }>
                                    <Image style={ styles.menuImage } source={ Images.menu['ic_tag'] } />
                                </View>
                                <GlobalLoc style={ styles.menuTitle } locKey="HomeScreen.menuPhanLoai"/>
                            </View>
                        </TouchableOpacity>

                        {/* Cap nhat moi */}
                        <TouchableOpacity onPress={this.openCapNhatMoi}>
                            <View style={[ styles.menuButtonContainer, styles.menuCapNhatMoi ]}>
                                <View style={ styles.menuImageContainer }>
                                    <Image style={ styles.menuImage } source={ Images.menu['ic_new'] } />
                                </View>
                                <GlobalLoc style={ styles.menuTitle } locKey="HomeScreen.menuCapNhatMoi"/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* separator
                    <View style={ styles.separator }/> */}


                    {/* list manga */}
                    <View style={ styles.listManagaContainer }>
                        {/* truyen con gai thich */}
                        <View style={ styles.listTruyenConGaiThichContainer }>
                            {/* title */}
                            <GlobalLoc locKey="HomeScreen.title_truyenConGaiThich" style={ styles.title_truyenConGaiThich }/>

                            {/* list */}
                            <View style={ styles.list }>
                                <MangaList data={ truyenConGai } dataId={0} />
                            </View>
                        </View>


                        {/* truyen con trai thich */}
                        <View style={ styles.listTruyenConGaiThichContainer }>
                            {/* title */}
                            <GlobalLoc locKey="HomeScreen.title_truyenConTraiThich" style={ styles.title_truyenConGaiThich }/>

                            {/* list */}
                            <View style={ styles.list }>
                                <MangaList data={ truyenConTrai } dataId={1} />
                            </View>
                        </View>


                        {/* truyen Romance */}
                        <View style={ styles.listTruyenConGaiThichContainer }>
                            {/* title */}
                            <GlobalLoc locKey="HomeScreen.title_truyenRomance" style={ styles.title_truyenConGaiThich }/>

                            {/* list */}
                            <View style={ styles.list }>
                                <MangaList data={ truyenRomance } dataId={2}/>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </GlobalContainer>
        );
    }
}


export default HomeScreen;