import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, FlatList } from 'react-native';

import GlobalContainer from 'components/GlobalContainer';
import GlobalButton from 'components/GlobalButton';
import GlobalLoc from 'components/GlobalLoc';
import GlobalHeader from 'components/GlobalHeader';
import { navigate } from 'services/NavigationService';
import truyenCapNhat from './../../db/truyenCapNhat';
import MangaItem from 'screens/HomeScreen/MangaItem';

import styles from 'styles/screens/NewUpdateScreen/NewUpdateScreen';



export class NewUpdateScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.renderItemManga = this.renderItemManga.bind(this);
        this.mangaKeyExtractor = this.mangaKeyExtractor.bind(this);
    }

    renderItemManga({item: manga}) {
        return(
           <MangaItem manga={ manga } direction={'vertical'} dataId={ 4 } />
        );
    }

    mangaKeyExtractor(manga) {
        return manga.id;
    }

    render() {

        return (
            <GlobalContainer style={ styles.container }>
                {/* header */}
                <GlobalHeader 
                    showLeftButton={ true } 
                    showRightButton={ true }
                    children ={ <GlobalLoc style={ styles.title_header } locKey="HomeScreen.menuCapNhatMoi" /> } />

                <View style={{flex: 1}}>
                    <FlatList
                        data={ truyenCapNhat }
                        renderItem={ this.renderItemManga }
                        keyExtractor={ this.mangaKeyExtractor }
                    />
                </View>

            </GlobalContainer>
        );
    }
}


export default NewUpdateScreen;