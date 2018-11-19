import { ScaledSheet, moderateScale, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    screen: {
        height: '167@s',
        position: 'relative',
        backgroundColor: 'rgba(242,242,242,0.8)',
    },

    iconSearch: {
        position: 'absolute',
        top: 0,
        right: '5@s',
        zIndex: 2,
    },

    wrapper: {

    },

    banner: {
        flex: 1,
    },

    imageBanner: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    textPosition: {
        position: 'absolute',
        bottom: '13@s',
        left: Sizes.s2,
        width: Sizes.s4,
        height: Sizes.s4,
        borderRadius: Sizes.s4,
        backgroundColor: '#fdd0a7',
        textAlign: 'center',
        lineHeight: Sizes.s4,
        fontSize: FontSizes.small,
    },

});
