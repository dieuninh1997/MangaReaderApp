import React, { Fragment } from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from 'styles/components/GlobalTag';


export class GlobalTag extends PureComponent {

    render() {
        const { data } = this.props;
       
        return (
            <View style={ styles.container }>
                {data.map((tag, index) => {
                    if (index < 3)
                        return (
                            <View key={index} style={ styles.tagContainer }>
                                <Text style={ styles.tagText }>{tag}</Text>
                            </View>
                        );
                    else return null;
                })}
            </View>
       );
    }
}

GlobalTag.propTypes = {
    data: PropTypes.array,//list tag of manga
};

export default GlobalTag;
