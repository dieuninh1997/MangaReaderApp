import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default ScaledSheet.create({
    container: {
        padding: Sizes.s2,
    },

    tomTatTruyen_container: {
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

    listManga_container: {
        flex: 1,
    },

    buttonReadManga: {
        flex: 1,
        flexDirection: 'row',
    },

    button: {
        flex: 1,
        marginHorizontal: Sizes.s1,
    },

});
