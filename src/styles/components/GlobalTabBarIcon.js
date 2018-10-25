import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';
import { Platform } from 'react-native';


export default ScaledSheet.create({
    icon: {
        fontSize: FontSizes.h2,
        color: Colors.info,
    },

    icon__active: {
        color: Colors.active,
    },
});
