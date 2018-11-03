import { ScaledSheet, moderateScale, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    container: {
        paddingVertical: '8@ms',
        paddingHorizontal: Sizes.s3,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    manga_thumbnai: {
        width: 50,
        height: 100,
        position: 'relative',
    },

    mangaViewsContainer: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        backgroundColor: 'rgba(0,0,0, 0.4)'
    },

    eyeIcon: {
        color: Colors.info,
        fontSize: FontSizes.p,
    },

    manga_views: {
        color: Colors.info,
        fontSize: FontSizes.small,
    },

    manga_name: {
        color: Colors.darkText,
        fontSize: FontSizes.small,
    }

});
