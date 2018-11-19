import { ScaledSheet, moderateScale, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    viewIconSearch: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        width: Sizes.s10,
        height: Sizes.s10,
    },

    iconSearch: {
        fontSize: Sizes.s4,
        color: Colors.info,
    },
    
});
