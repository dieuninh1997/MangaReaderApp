import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default ScaledSheet.create({
    nextChapterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: Sizes.s1,
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
});
