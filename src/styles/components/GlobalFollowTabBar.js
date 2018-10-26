import { ScaledSheet } from 'react-native-size-matters';
import { Colors, Sizes, FontSizes } from 'styles/variables';


export default ScaledSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: Sizes.v4,
        paddingHorizontal: Sizes.s2,
    },

    tabBar_Container: {
        width: '100%',
        height: Sizes.s8,
        marginTop: Sizes.v3,
        marginHorizontal: Sizes.s7,
        borderRadius: Sizes.s1,
        flexDirection: 'row',
        overflow: 'hidden',
    },

    tabBar_Tab: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightenPrimary,
    },

    tabBar_Tab__left: {
        flex: 4,
    },

    tabBar_Tab__right: {
        flex: 4,
    },

    tabBar_Tab__active: {
        backgroundColor: Colors.active,
    },

    tabBar_Label: {
        color: Colors.info,
        fontSize: FontSizes.p,
    },

    tabBar_Label__active: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
});
