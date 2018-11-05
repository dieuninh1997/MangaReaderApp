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

    separator: {
        height: Sizes.s2,
        backgroundColor: Colors.lightBackground,
    },

    menuContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.info,
        height: '100@ms',
        width: width,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: Sizes.s2,
        marginVertical: Sizes.s2,
    },

    menuButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Sizes.s1,
        paddingVertical: Sizes.s3,
        width: width*0.3,
    },

    menuImageContainer: {
        width: '40@ms',
        height: '40@ms',
        borderRadius: Sizes.s4,
        backgroundColor: Colors.info,
        alignItems: 'center',
        justifyContent: 'center',
    },

    menuBrower: {
        backgroundColor: '#faa6a6',
    },

    menuPhanLoai: {
        backgroundColor: '#fbd178',
    },

    menuCapNhatMoi: {
        backgroundColor: '#66e9fb',
    },

    menuTitle: {
        fontSize: FontSizes.small,
        color: Colors.info,
    },

    menuImage: {
        width: IconSizes.extraSmall,
        height: IconSizes.extraSmall,
    },

    listManagaContainer: {
        flex: 1,
    },

    listTruyenConGaiThichContainer: {
        paddingVertical: Sizes.s3,
        alignItems: 'center',
    },

    title_truyenConGaiThich: {
        fontSize: FontSizes.p,
        color: Colors.darkText,
    },

    truyenContainer: {
        width: width*0.3,
        height: height*0.3,
        margin: 3,
    },

    truyenImageContainer: {

    },

    truyenImage: {

    },

    truyenName: {
        fontSize: FontSizes.small,
        color: Colors.darkText,
    },

    list: {
        flexDirection: 'row',
        paddingHorizontal: Sizes.s1,
    }
});
