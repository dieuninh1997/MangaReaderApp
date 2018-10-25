import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    container: {
        backgroundColor: Colors.lightenPrimary,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    appName: {
        fontSize: FontSizes.large,
        color: Colors.info,
        fontWeight: 'bold',
    },
});
