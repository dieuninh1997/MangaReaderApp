import React, { Component } from 'react';
import PureComponent from 'pure-component';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import isEqual from 'react-fast-compare';

import I18n from 'i18n';
import { FontSizes } from 'styles/variables';

import styles from 'styles/components/GlobalLoc';


class GlobalLoc extends PureComponent {
    shouldComponentUpdate(nextProps) {
        const { customizer, dispatch, ...params } = this.props;
        const { customizer: nextCustomizer, dispatch: nextDispatch, ...nextParams } = nextProps;
        return !isEqual(params, nextParams);
    }

    render() {
        const { locKey, customizer, style, ellipsizeMode, numberOfLines, ...props } = this.props

        return (
            <Text style={[styles.text, style || {}]} ellipsizeMode={ ellipsizeMode || 'tail' } numberOfLines={ numberOfLines }>
                { customizer(I18n.t(locKey, props)) }
            </Text>
        );
    }
}


GlobalLoc.defaultProps = {
    customizer: text => text,
};

GlobalLoc.propTypes = {
    customizer: PropTypes.func,
    locKey: PropTypes.any.isRequired,
};


const mapStateToProps = ({ i18n }) => ({
    locale: i18n.locale,
    version: i18n.version,
});

export default connect(mapStateToProps)(GlobalLoc);
