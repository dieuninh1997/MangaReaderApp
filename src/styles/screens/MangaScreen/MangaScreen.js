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

    translaterName: {
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
        padding: Sizes.s1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        flexDirection: 'row',
    },

    views: {
        fontSize: FontSizes.extraSmall,
        color: Colors.lightText,
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
    }
});
