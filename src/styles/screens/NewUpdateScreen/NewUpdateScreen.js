import { ScaledSheet, moderateScale, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    container: {
        marginBottom: Sizes.s1,
    },

    title_header: {
        fontSize: FontSizes.p,
        color: Colors.info,
        textAlign: 'center',
    },

});
