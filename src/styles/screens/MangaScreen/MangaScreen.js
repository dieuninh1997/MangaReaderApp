import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default ScaledSheet.create({
    container: {
        flex: 1,
        padding: Sizes.s2,
        marginBottom: Sizes.s2,
    },

    truyen_container: {
        flexDirection: 'row',
        height: height * 0.3,
    },

    thumbnai: {
        height: 200,
        width: 150,
    },

    info: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: Sizes.s2,
    },

    mangaName: {
        fontSize: FontSizes.small,
        color: Colors.darkText,
        marginBottom: Sizes.s1,
    },

    autherName: {
        fontSize: FontSizes.extraSmall,
        color: Colors.lightText,
        marginBottom: Sizes.s1,
    },

    otherMangaName: {
        fontSize: FontSizes.extraSmall,
        color: Colors.lightText,
        marginBottom: Sizes.s1,
    },

    status: {
        fontSize: FontSizes.extraSmall,
        color: Colors.lightText,
        marginBottom: Sizes.s1,
    },

    viewLike_container: {
        flexDirection: 'row',
        marginTop: Sizes.s5,
        justifyContent: 'space-between',
    },

    views_container: {
        backgroundColor: Colors.active,
        borderRadius: Sizes.s5,
        paddingVertical: Sizes.s1,
        paddingHorizontal: Sizes.s2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    views: {
        fontSize: FontSizes.extraSmall,
        color: Colors.lightText,
    },

    eyeIcon: {
        fontSize: FontSizes.p,
        color: Colors.lightText,
        marginRight: Sizes.s1,
    },                                    
    
    likes: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    numberOfLike: {
        fontSize: FontSizes.extraSmall,
        color: Colors.lightText,
        marginRight: Sizes.s1,
    },

    likeIcon: {
        fontSize: FontSizes.p,
        color: Colors.lightText,
    },

    listChapter_container: {
        flex: 1,
        backgroundColor: Colors.active
    },

    headerItemChapter: {
        height: Sizes.v6,
        backgroundColor: Colors.lightenPrimary,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.s1
    },

    rowItemChapter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    item_soChuong: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    item_capNhat: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },

    item_luotXem: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    tomTatTruyen_button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.lightenPrimary,
        paddingHorizontal: Sizes.s1,
    },

    iconContent: {
        fontSize: FontSizes.h4,
        color: Colors.active,
        marginRight: Sizes.s1,
    },

    tomTatTruyen_container: {
        
    }
});
