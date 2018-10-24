import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';

import { Colors } from 'styles/variables';

import styles from 'styles/components/GlobalSpinner';


class GlobalSpinner extends PureComponent {
    render() {
        const { showSpinner, spinnerMessage } = this.props;

        if (!showSpinner) {
            return null;
        }

        return (
            <View style={ styles.container }>
                <Spinner
                    isVisible={ true }
                    size={ 40 }
                    type={ 'Circle' }
                    color={ Colors.lightenPrimary }
                />

                {spinnerMessage ? (
                    <Text style={ styles.message }>{ spinnerMessage }</Text>
                ) : null}
            </View>
        );
    }
}


const mapStateToProps = ({ global }) => ({
    showSpinner: global.showSpinner,
    spinnerMessage: global.spinnerMessage,
});

export default connect(mapStateToProps)(GlobalSpinner);
