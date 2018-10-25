import React, { Fragment } from 'react';
import PureComponent from 'pure-component';
import { View, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import styles from 'styles/components/GlobalOption';


export class GlobalOption extends PureComponent {

    render() {
        const { style, showSeparator, children, rightComponent, onPress } = this.props;
       
        return (
            <Fragment>
                <TouchableHighlight
                    underlayColor="#eff0f0"
                    onPress={ onPress }
                    activeOpacity={ 0.3 } 
                    style={ style }
                >
                    <View style={ styles.buttonContent }>
                        { children }
                        { rightComponent }
                    </View>
                </TouchableHighlight>

                {showSeparator && (
                    <View style={ styles.separatorContainer }>
                        <View style={ styles.separator } />
                    </View>
                )}
            </Fragment>
       );
    }
}

GlobalOption.propTypes = {
    onPress: PropTypes.func,
    rightComponent: PropTypes.object,
    showSeparator: PropTypes.bool
};

export default GlobalOption;
