import { ScaledSheet, verticalScale } from 'react-native-size-matters';
import { Colors, FontSizes, Sizes } from 'styles/variables';


export default ScaledSheet.create({
    title: { 
        fontSize: FontSizes.h5,
        fontWeight: 'bold', 
        color: Colors.info,
        textAlign: 'center',
        marginTop: Sizes.v2,
        marginBottom: Sizes.v5,
    },
    globalContainer_Content: { 
        backgroundColor: '#f2f2f2', 
        overflow: 'hidden' 
    },
    arrow: {
        fontSize: FontSizes.h4,
        color: Colors.black,
    },
    icon: {
        fontSize: FontSizes.h4,
        marginRight: Sizes.s3,
        color: Colors.black,
        position: 'relative',
        top: -verticalScale(1),
    },
    iconLogs: {
        fontSize: FontSizes.h2,
    },
    separater: {
        marginBottom: Sizes.s2,
    },
    flexDirectionRow: {
        flexDirection: 'row',
    },
  
});
