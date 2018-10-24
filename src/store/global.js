import { AppState } from 'react-native';
import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';
import _ from 'lodash';

/**
 * =====================================================
 * Global actions
 * =====================================================
 */

export const GLOBAL_UPDATE_STATE = createAction('GLOBAL_UPDATE_STATE');


// Spinner action
export const GLOBAL_HIDE_SPINNER = () => (dispatch) => {
    return dispatch(GLOBAL_UPDATE_STATE({ showSpinner: false, spinnerMessage: '', }));
};
export const GLOBAL_SHOW_SPINNER = (message) => (dispatch) => {
    return dispatch(GLOBAL_UPDATE_STATE({ showSpinner: true, spinnerMessage: message, }));
};


// Modal action
export const GLOBAL_SHOW_MODAL = (modalContent) => (dispatch) => {
    return dispatch(GLOBAL_UPDATE_STATE({
        showModal: true,
        modalContent: modalContent,
    }));
};
export const GLOBAL_HIDE_MODAL = () => (dispatch) => {
    return dispatch(GLOBAL_UPDATE_STATE({
        showModal: false,
        modalContent: null,
    }));
};



/**
 * =====================================================
 * Global reducer
 * =====================================================
 */

const defaultState = {
    showSpinner: false,
    spinnerMessage: '',

    showModal: false,
    modalContent: null,

    isLanguageSet: false, 
};
export const globalReducer = handleActions({
    GLOBAL_UPDATE_STATE: (state, { payload }) => {
        return fromJS(state)
            .mergeDeep(payload)
            .toJS();
    },
}, defaultState);



/**
 * =====================================================
 * Global selectors
 * =====================================================
 */




export default globalReducer;
