import { Platform } from 'react-native';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    container: {
        width: '100%',
        height: Sizes.s10,
        paddingHorizontal: Sizes.s2,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: Platform.OS === 'ios' ? '25@ms' : '35@ms',
    },

    separator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    titleTextStyle: {
        fontSize: FontSizes.p,
        color: Colors.info,
        fontWeight: 'bold',
    },

    leftButton_Icon: {
        color: Colors.info,
        fontSize: FontSizes.large,
    },

    rightButton_Icon: {
        top: '3@ms',
        color: Colors.info,
        fontSize: FontSizes.large,
    },

    search_Icon: {
        marginTop: '5@ms',
        marginRight: '10@ms',
        color: Colors.info,
        fontSize: FontSizes.h5,
    },

    rightButtonContainer: { 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    leftButtonContainer: {
        flex: 1,
    }

});
