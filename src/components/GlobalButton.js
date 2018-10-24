import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, Animated, Easing, PanResponder } from 'react-native';
import PropTypes from 'prop-types';
import { moderateScale } from 'react-native-size-matters';

import GlobalLoc from 'components/GlobalLoc';

import styles from 'styles/components/GlobalButton';


export class GlobalButton extends PureComponent {

    constructor(props) {
        super(props);
        this.animatedValue = new Animated.Value(0);

        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
                this.startAnimate('down');
            },
            onPanResponderRelease: (evt, gestureState) => {
                this.startAnimate('up');
                if (this.props.onPress) {
                    setTimeout(this.props.onPress, 50);
                }
            },
          });
    }


    // direction: 'up', 'down'
    startAnimate(direction = 'down') {
        if (direction === 'down') {
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: 50,
                    useNativeDriver: true,
                }
            ).start();
        } else {
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 0,
                    duration: 150,
                    useNativeDriver: true,
                }
            ).start();
        }
    }


    render() {
        const { type, children, locKey } = this.props;

        const transform = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, moderateScale(4)]
        });
        const transform3d = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [moderateScale(4), 0]
        });
        const opacity = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0.7]
        });

        let containerStyle = styles.container;
        let buttonContainerStyle = null;
        let buttonTextStyle = null;
        let buttonShadowStyle = null;
        let is3dButton = false;

        switch (type) {
            case 'primary':
                buttonContainerStyle = [styles.buttonContainer];
                buttonTextStyle = [styles.buttonText];
                break;

            case 'outlinePrimary':
                buttonContainerStyle = [styles.buttonContainer, styles.buttonContainer__primaryOutline];
                buttonTextStyle = [styles.buttonText, styles.buttonText__primaryOutline];
                break;

            case 'lightenPrimary':
                buttonContainerStyle = [styles.buttonContainer, styles.buttonContainer__lightenPrimary];
                buttonTextStyle = [styles.buttonText, styles.buttonText__lightenPrimary];
                break;

            case 'outlineLightenPrimary':
                buttonContainerStyle = [styles.buttonContainer, styles.buttonContainer__lightenPrimaryOutline];
                buttonTextStyle = [styles.buttonText, styles.buttonText__lightenPrimaryOutline];
                break;

            case '3dLightenPrimary':
                containerStyle = [styles.container, styles.container__3dLightenPrimary];
                buttonContainerStyle = [styles.buttonContainer, styles.buttonContainer__lightenPrimary];
                buttonTextStyle = [styles.buttonText, styles.buttonText__lightenPrimary];
                buttonShadowStyle = [styles.buttonShadow, styles.buttonShadow__3dLightenPrimary];
                is3dButton = true;
                break;

            case 'warning':
                buttonContainerStyle = [styles.buttonContainer, styles.buttonContainer__warning];
                buttonTextStyle = [styles.buttonText, styles.buttonText__warning];
                break;

            default:
                buttonContainerStyle = [styles.buttonContainer];
                buttonTextStyle = [styles.buttonText];
        }


        return (
            <View style={[containerStyle, this.props.style || {}]} {...this._panResponder.panHandlers}>
                {is3dButton && ( 
                    <Animated.View
                        style={[buttonShadowStyle, {
                            transform: [{ scaleY: transform3d }],
                        }]}
                    />
                )}

                <Animated.View
                    style={[buttonContainerStyle, {
                        transform: [{ translateY: is3dButton ? transform : 0 }],
                        opacity: opacity,
                    }]
                }>
                    {locKey ? (
                        <GlobalLoc locKey={ locKey } style={ buttonTextStyle } />
                    ) : (
                        <Text style={ buttonTextStyle }>
                            { children }
                        </Text>
                    )}
                </Animated.View>
            </View>
        );
    }
}


GlobalButton.propTypes = {
    type: PropTypes.string, // Button type : primary, outlinePrimary, lightenPrimary, outlineLightenPrimary, 3dLightenPrimary, warning
    locKey: PropTypes.string, // Optional
    onPress: PropTypes.func,
};


export default GlobalButton;
