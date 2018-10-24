import React from 'react';
import { RNToasty } from 'react-native-toasty';

import store from 'store';
import {
    GLOBAL_SHOW_SPINNER,
    GLOBAL_HIDE_SPINNER,
    GLOBAL_SHOW_MODAL,
    GLOBAL_HIDE_MODAL
} from 'store/global';

import { Colors } from 'styles/variables';


export const GlobalService = {
    showSpinner: (message) => {
        return store.dispatch(GLOBAL_SHOW_SPINNER(message));
    },
    hideSpinner: () => {
        return store.dispatch(GLOBAL_HIDE_SPINNER());
    },

    showModal: (component) => {
        return store.dispatch(GLOBAL_SHOW_MODAL(component));
    },
    hideModal: () => {
        const { global } = store.getState();
        const { showModal } = global;



        return store.dispatch(GLOBAL_HIDE_MODAL());
    },

    showErrorToast: (message) => {
        RNToasty.Show({
            title: message,
            duration: 0,
            withIcon: false,
            tintColor: Colors.secondary,
        });
    },

};


export default GlobalService;
