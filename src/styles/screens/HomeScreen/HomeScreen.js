import { ScaledSheet, moderateScale, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const IconSizes = {
    extraSmall: moderateScale(24),
    small:  moderateScale(30),
    default: moderateScale(40),
    large: moderateScale(60),
    superLarge: moderateScale(80),
};

export default ScaledSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.info,
    },

    swiperContainer: {
        backgroundColor: Colors.lightenPrimary,
        height: height * 0.3,
        margin: Sizes.s2,
        padding: Sizes.s2,
        borderRadius: Sizes.s1,
        flex: 1,
    },

    swiperContent: {

    },

    slide: {

    },

    slideImage: {

    },

    menuContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.info,
        height: 100,
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Sizes.s2,
    },

    menuButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Sizes.s1,
        paddingVertical: Sizes.s3,
        width: width*0.3,
    },

    menuImage: {
        width: IconSizes.extraSmall,
        height: IconSizes.extraSmall,
    },

    listManagaContainer: {
        flex: 1,
    }

});
