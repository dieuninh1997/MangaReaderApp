import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    title: { 
        fontSize: FontSizes.h5,
        fontWeight: 'bold', 
        color: Colors.info,
        textAlign: 'center',
        marginTop: Sizes.v2,
        marginBottom: Sizes.v5,
    },
    icon: {
        fontSize: FontSizes.h4,
        marginRight: Sizes.s3,
        color: Colors.secondary,
        position: 'relative',
        top: -verticalScale(1),
    },
    checkIcon: {
        fontSize: FontSizes.h5,
        color: Colors.primary
    }
});
