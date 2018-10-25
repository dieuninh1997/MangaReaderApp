import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import GlobalContainer from 'components/GlobalContainer';
import GlobalButton from 'components/GlobalButton';
import GlobalLoc from 'components/GlobalLoc';
import GlobalHeader from 'components/GlobalHeader';
import { navigate } from 'services/NavigationService';
import Images from 'assets/images';


import styles from 'styles/screens/HomeScreen/HomeScreen';



export class HomeScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.onMenuBrowserButtonPressed = this.onMenuBrowserButtonPressed.bind(this);

    }

    onMenuBrowserButtonPressed() {
        navigate('WebViewScreen', {url: 'http://www.nettruyen.com/', title: "Browser"});
    }



    render() {
        console.log("HomeScreen");
        const images = [
            "Anh1",
            "Anh2",
            "Anh3",
            "Anh4",
            "Anh5",
            "Anh6"
        ];

        return (
            <GlobalContainer style={ styles.container }>
                {/* header */}
                <GlobalHeader 
                    showSearchButton={ true }
                    showRightButton={ true }  
                    locKey="HomeScreen.title"
                />

                <ScrollView>
                    {/* Swiper */}
                    <View style={ styles.swiperContainer }>
                        <Swiper 
                            autoplay
                            style={ styles.swiperContent }
                        >
                            {
                                images.map((i,img) =>{
                                    return (
                                        <View key={i} style={ styles.slide }>
                                            <Image style={ styles.slideImage } source={ Images.menu['emoj_smile'] } />
                                        </View>
                                    );
                                })
                            }
                        </Swiper>
                    </View>

                    {/* menu */}
                    <View style={ styles.menuContainer }>
                        {/* Browser */}
                        <TouchableOpacity onPress={ this.onMenuBrowserButtonPressed }>
                            <View style={ styles.menuButtonContainer }>
                                <Image style={ styles.menuImage } source={ Images.menu['emoj_admire'] } />
                                <GlobalLoc locKey="HomeScreen.menuBrowser"/>
                            </View>
                        </TouchableOpacity>

                        {/* Phan loai */}
                        <TouchableOpacity onPress={()=>{}}>
                            <View style={ styles.menuButtonContainer }>
                                <Image style={ styles.menuImage } source={ Images.menu['emoj_smile'] } />
                                <GlobalLoc locKey="HomeScreen.menuPhanLoai"/>
                            </View>
                        </TouchableOpacity>

                      

                        {/* Cap nhat moi */}
                        <TouchableOpacity onPress={()=>{}}>
                            <View style={ styles.menuButtonContainer }>
                                <Image style={ styles.menuImage } source={ Images.menu['emoj_glass'] } />
                                <GlobalLoc locKey="HomeScreen.menuCapNhatMoi"/>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {/* list manga */}
                    <View style={ styles.listManagaContainer }>
                                
                    </View>
                </ScrollView>
            </GlobalContainer>
        );
    }
}


export default HomeScreen;