import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    container: {
        flexDirection: 'row',
    },

    tagContainer: {
        flex: 1,
        borderRadius: Sizes.s1,
        borderWidth: 1,
        borderColor: Colors.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '2@ms',
        paddingHorizontal: Sizes.s1,
        marginRight: Sizes.s2,
    },

    tagText: {
        fontSize: FontSizes.extraSmall,
        color: Colors.lightGray,
    }
});
