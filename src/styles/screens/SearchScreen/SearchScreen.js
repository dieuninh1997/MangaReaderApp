import { ScaledSheet, moderateScale, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const IconSizes = {
    extraSmall: moderateScale(24),
    small:  moderateScale(30),
    default: moderateScale(40),
    large: moderateScale(60),
    superLarge: moderateScale(80),
};

export default ScaledSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: Colors.info,
    },

    title_header: {
        fontSize: FontSizes.p,
        color: Colors.info,
        textAlign: 'center',
    },

    inputContainer: {
        flexDirection: 'row',
        marginVertical: Sizes.s2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputSearchText: {
        width: width*0.8,
        height: '34@vs',
        borderColor: Colors.lightenSecondary, 
        backgroundColor: Colors.lightBackground,
        color: Colors.darkText, 
        textAlign: 'center', 
        fontSize: FontSizes.small, 
        borderWidth: 1, 
        borderRadius: Sizes.s4,
        marginRight: Sizes.s2,
    },

    searchButton: {

    },

    separator: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.lightBackground,
    },

    historyContainer: {
        justifyContent: 'center',
        marginTop: Sizes.s3,
        paddingHorizontal: Sizes.s2,
    },

    titleSearchHistoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    title_searchHistory: {
        fontSize: FontSizes.small,
        color: Colors.lightText,
    },

    timkiemView: {
        backgroundColor: Colors.lightenPrimary,
        alignItems: 'center',
        justifyContent: 'center',
        padding: Sizes.s1,
    },

    deleteView: {
        width: Sizes.s6,
        height: Sizes.s6,
        borderRadius: Sizes.s3,
        backgroundColor: Colors.warning,
        alignItems: 'center',
        justifyContent: 'center',
    },
    clearHistoryIcon: {
        fontSize: FontSizes.h3,
        color: Colors.info,
    }
});
