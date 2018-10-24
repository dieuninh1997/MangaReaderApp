import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    label: {
        fontSize: FontSizes.extraSmall,
        lineHeight: FontSizes.extraSmall,
        textAlign: 'center',
        marginTop: '3@ms',
        color: Colors.info,
    },

    label__active: {
        fontWeight: 'bold',
        color: Colors.info,
    },
});
