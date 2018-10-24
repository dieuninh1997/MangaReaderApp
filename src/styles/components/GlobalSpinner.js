import { Dimensions } from 'react-native';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';

const { width, height } = Dimensions.get("window");


export default ScaledSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: width,
        height: height,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    message: {
        fontSize: FontSizes.p,
        color: Colors.lightenPrimary,
        marginTop: Sizes.v2,
    },
});
