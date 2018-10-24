import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';
import { Platform } from 'react-native';

export default ScaledSheet.create({
    container: {
        backgroundColor: Colors.primary,
    },

    headerContainer: {
        width: '100%',
        height: Sizes.s7,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: Sizes.s2,
        marginTop: Platform.OS === 'ios' ? '25@ms' : '35@ms',
        marginBottom: Sizes.s2,
    },
    
    backButton: {
        flex: 1,
    },

    leftButton_Icon: {
        color: Colors.info,
        fontSize: FontSizes.large,
    },

    titleText: {
        textAlign: 'center',
        fontSize: FontSizes.h5,
        color: Colors.info,
    },

    flexOne: {
        flex: 1,
    }
});
