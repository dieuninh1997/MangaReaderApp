import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { navigate } from 'services/NavigationService';

import styles from 'styles/screens/HomeScreen/MangaItem';


export const MangaItem = (props) => {
    const { manga, dataId } = props;
    const uri = { uri: manga.comicImage };

    return (
        <TouchableOpacity onPress={()=>{ navigate('MangaScreen', { dataId: dataId, manga: manga })}}>
            <View style={ styles.container }>
                {/* thumbnai */}
                
                <View style={ styles.mangaContainer }>
                    <Image source={ uri } style={ styles.manga_thumbnai }/>
                    <View style={ styles.mangaViewsContainer }>
                        <Icon name="eye" style={ styles.eyeIcon } />
                        <Text style={ styles.manga_views }>{ manga.comicView }</Text>
                    </View>
                </View>

                {/* name */}
                <Text style={ styles.manga_name } numberOfLines={2} ellipsizeMode="tail">{ manga.comicTittle }</Text>
            </View>
        </TouchableOpacity>
    );
};



export default MangaItem;
