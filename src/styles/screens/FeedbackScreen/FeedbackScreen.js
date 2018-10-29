import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default ScaledSheet.create({
    title: { 
        fontSize: FontSizes.h5,
        fontWeight: 'bold', 
        color: Colors.info,
        textAlign: 'center',
        marginTop: Sizes.v2,
        marginBottom: Sizes.v5,
    },

    feedback_guide: {
        backgroundColor: Colors.pink,
        padding: Sizes.s2,
    },

    inputContainer: {
        marginHorizontal: Sizes.s2,
        marginVertical: Sizes.s4, 
    },

    inputSearchText: {
        width: '100%',
        height: height*0.3,
        borderColor: Colors.lightenSecondary, 
        backgroundColor: Colors.lightBackground,
        color: Colors.darkText, 
        fontSize: FontSizes.small, 
        borderWidth: 1, 
        borderRadius: Sizes.s1,
        marginRight: Sizes.s2,
    },

    buttonContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: Sizes.s4,
    },
    
});
