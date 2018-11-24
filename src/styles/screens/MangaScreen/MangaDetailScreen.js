import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default ScaledSheet.create({
    title_header: {
        fontSize: FontSizes.p,
        color: Colors.info,
        textAlign: 'center',
    },

    nextChapterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: Sizes.s1,
        backgroundColor: Colors.lightenPrimary,
    },

    iconBackNextChapter: {
        fontSize: FontSizes.large,
        
    },

    iconEnable: {
        color: Colors.active,
    },

    iconDisable: {
        color: Colors.lightGray,
    },

    imageContainer: {
        flex: 1,
    },

    image: {
        flex: 1,
        width: width,
        height: height,
    },

    //selector chapter
    selectorChapterContainer: {
        backgroundColor: Colors.button,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Sizes.s2,
    },

    nameChapter: {
        fontSize: FontSizes.small,
        color: Colors.info,
    },

    viewBtnFilter: {
        marginRight: '10@s',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    btnFilter: {
        color: '#FFF',
        fontSize: '12@s'
    },

    viewButtonFilter: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },

    viewDropDown: {
        width: '90@s',
        backgroundColor: Colors.gray,
        borderColor: Colors.primary,
        borderWidth: '1@s',
    },

    dropDownTextStyle: {
        fontSize: '12@s',
        color: Colors.darkText,
        backgroundColor: Colors.primary,
        textAlign: 'center'
    },

    dropDownTextHighlightStyle: {
        fontSize: '12@s',
        color: Colors.active,
    },

});
