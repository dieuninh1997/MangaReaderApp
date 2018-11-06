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
import truyenConGai from './../../db/truyenConGai';


import styles from 'styles/screens/HomeScreen/HomeScreen';


export class HomeScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.onMenuBrowserButtonPressed = this.onMenuBrowserButtonPressed.bind(this);
        this.goToDetailScreen = this.goToDetailScreen.bind(this);
    }

    onMenuBrowserButtonPressed() {
        navigate('WebViewScreen', {url: 'http://www.nettruyen.com/', title: "Browser"});
    }

    goToDetailScreen(truyen) {
        // navigate('DetailScreen', {truyen: truyen});
    }


    render() {
        return (
            <GlobalContainer style={ styles.container }>
                {/* header */}
                <GlobalHeader 
                    showRightButton={ true }  
                    locKey="HomeScreen.title"
                />

                <ScrollView>
                    {/* menu */}
                    <View style={ styles.menuContainer }>
                        {/* Browser */}
                        <TouchableOpacity onPress={ this.onMenuBrowserButtonPressed }>
                            <View style={[ styles.menuButtonContainer, styles.menuBrower ]}>
                                <View style={ styles.menuImageContainer }>
                                    <Image style={ styles.menuImage } source={ Images.menu['emoj_admire'] } />
                                </View>
                                <GlobalLoc style={ styles.menuTitle } locKey="HomeScreen.menuBrowser"/>
                            </View>
                        </TouchableOpacity>

                        {/* Phan loai */}
                        <TouchableOpacity onPress={()=>{}}>
                            <View style={[ styles.menuButtonContainer, styles.menuPhanLoai ]}>
                                <View style={ styles.menuImageContainer }>
                                    <Image style={ styles.menuImage } source={ Images.menu['emoj_smile'] } />
                                </View>
                                <GlobalLoc style={ styles.menuTitle } locKey="HomeScreen.menuPhanLoai"/>
                            </View>
                        </TouchableOpacity>

                        {/* Cap nhat moi */}
                        <TouchableOpacity onPress={()=>{}}>
                            <View style={[ styles.menuButtonContainer, styles.menuCapNhatMoi ]}>
                                <View style={ styles.menuImageContainer }>
                                    <Image style={ styles.menuImage } source={ Images.menu['emoj_glass'] } />
                                </View>
                                <GlobalLoc style={ styles.menuTitle } locKey="HomeScreen.menuCapNhatMoi"/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* separator */}
                    <View style={ styles.separator }/>


                    {/* list manga */}
                    <View style={ styles.listManagaContainer }>
                        {/* truyen con gai thich */}
                        <View style={ styles.listTruyenConGaiThichContainer }>
                            <GlobalLoc locKey="HomeScreen.title_truyenConGaiThich" style={ styles.title_truyenConGaiThich }/>
                            <View style={ styles.list }>
                            {
                                <MangaList data={ truyenConGai } />
                            }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </GlobalContainer>
        );
    }
}


export default HomeScreen;