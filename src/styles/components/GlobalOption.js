import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    separatorContainer: {
        width: '100%',
        paddingHorizontal: Sizes.s3,
        backgroundColor: Colors.info
    },
    separator: {
        height: 1, 
        backgroundColor: '#eff0f0', 
    },
    buttonContent: {
        height: Sizes.v10,
        paddingHorizontal: Sizes.s3, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.info 
    }
});
