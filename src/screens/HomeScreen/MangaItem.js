import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from 'styles/screens/HomeScreen/MangaItem';


export const MangaItem = (props) => {
    const { manga } = props;
    const uri = { uri: manga.comicImage };

    return (
        <View style={ styles.container }>
            {/* thumbnai */}
            
            <View style={ styles.manga_thumbnai }>
                <Image source={ uri } />
                <View style={ styles.mangaViewsContainer }>
                    <Icon name="eye" style={ styles.eyeIcon } />
                    <Text style={ styles.manga_views}>{ manga.comicView }</Text>
                </View>
            </View>

            {/* name */}
            <Text style={ styles.manga_name }>{ manga.comicTittle }</Text>
        </View>
    );
};



export default MangaItem;
