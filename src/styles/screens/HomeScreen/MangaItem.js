import { ScaledSheet, moderateScale, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    container: {
        padding: Sizes.s1,
        flexDirection: 'column',
        backgroundColor: 'white',
        height: 250,
        width: 170,
    },

    containerHorizontal: {
        padding: Sizes.s1,
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 150,
        width: '100%',
        borderBottomWidth: Sizes.s1,
        borderBottomColor: Colors.lightBackground
    },

    infoMangaHorizontal: {
        flex: 3,
        marginLeft: Sizes.s1,  
        justifyContent: 'space-between',
        paddingVertical: Sizes.s2,
    },

    mangaContainer: {
       flex: 1,
    },

    manga_thumbnai: {
        flex: 1,
    },

    mangaViewsContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'rgba(0,0,0, 0.4)'
    },

    eyeIcon: {
        color: Colors.info,
        fontSize: FontSizes.p,
        marginHorizontal: Sizes.s1,
    },

    manga_views: {
        color: Colors.info,
        fontSize: FontSizes.extraSmall,
    },

    manga_name: {
        color: Colors.darkText,
        fontSize: FontSizes.small,
    },

    subText: {
        color: Colors.lightText,
        fontSize: FontSizes.extraSmall,
        marginRight: Sizes.s2,
    }

});
