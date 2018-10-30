import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    container: {
        padding: Sizes.s1,
        flexDirection: 'row',
    },

    tagContainer: {
        flex: 1,
        borderRadius: Sizes.s1,
        borderWidth: 1,
        borderColor: Colors.lightText,
        marginHorizontal: Sizes.s2,
    },

    tagText: {
        fontSize: FontSizes.extraSmall,
        color: Colors.lightText,
    }
});
