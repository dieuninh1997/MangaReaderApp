import { ScaledSheet, moderateScale, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    title_Container: {
        flexDirection: 'row',

    },

    title_Icon: {
        fontSize: FontSizes.h2,
        color: Colors.primary,
    },

    title_Text: {
        fontSize: FontSizes.p,
        color: Colors.secondary,
    }



});
