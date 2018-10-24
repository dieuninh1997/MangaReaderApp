import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    container: {
        backgroundColor: Colors.primary,
    },

    tabBar: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(1, 1, 1, 0.1)',
        flexDirection: 'row',
        height: '60@ms',
        backgroundColor: Colors.primary,
    },

    menuWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    menuContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});
