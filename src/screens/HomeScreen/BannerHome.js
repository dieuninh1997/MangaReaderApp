import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, Image } from 'react-native';

import Swiper from '../../libs/Swiper';
import SearchHome from './SearchHome';

import styles from 'styles/screens/HomeScreen/BannerHome';



export class BannerHome extends PureComponent {
    listImagesSource = [
        { uri: 'http://statis.gamen.vn/images/upload/2015/10/13/25_GYOc82KxP5_acf.jpg' },
        { uri: 'https://genknews.genkcdn.vn/k:thumb_w/640/2016/4-1466823108523/phimliveactioncuamangakinhditokyoghoullodandienvienchinh.jpg' },
        { uri: 'https://i.ytimg.com/vi/AR-RmotscXU/sddefault.jpg' },
        { uri: 'https://pibook.vn/uploaded/tiem-do-co-a-xa-tap3postcards.jpg' },
        { uri: 'https://laodongxuatkhau.vn/images/2018/01/25/1-truyen-tranh-tinh-cam-nhat-ban.jpg' }
    ];
    
    state = {
        position: 1
    }

    _changePostion(index) {
        this.setState({
          position: index + 1
        })
    }

    render() {

        return (
            <View style={ styles.screen }>
                {/* icon search */}
                <View style={ styles.iconSearch }>
                    <SearchHome navigation={ this.props.navigation } />
                </View>

                {/* swiper some thumbnais manga */}
                <Swiper 
                    style={ styles.wrapper }
                    onIndexChanged={(index) => this._changePostion(index)}
                    showsButtons={ false }
                    showsPagination={ false }
                    autoplayTimeout={ 4 }
                    autoplay={ true }
                >
                    {this.listImagesSource.map((img, index) => {
                        return (
                            <View style={ styles.banner } key={ index }>
                                <Image
                                    resizeMode={ 'cover' }
                                    style={ styles.imageBanner }
                                    source={{ uri: img.uri }}
                                />
                            </View>
                        );
                    })}
                </Swiper>
                <Text style={ styles.textPosition }>{ this.state.position }</Text>
            </View>
        );
    }
}


export default BannerHome;