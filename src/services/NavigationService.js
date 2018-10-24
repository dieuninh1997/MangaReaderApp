import { NavigationActions, StackActions } from 'react-navigation';
import _ from 'lodash';

let _navigator;
let subscribers = [];


export const setTopLevelNavigator = (navigatorRef) => {
    _navigator = navigatorRef;
};


export const emitNavigationChanged = (currentState) => {
    _.forEach(subscribers, (subscriber) => subscriber(currentState));
};


export const onNavigationChanged = (subscriber) => {
    subscribers.push(subscriber);
};


export const navigate = (routeName, params, willReset) => {
    if (!routeName) {
        _navigator.dispatch(
            NavigationActions.back()
        );
        return;
    }

    if (willReset) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({
                routeName: routeName,
                params: params, 
            })],
        });
        _navigator.dispatch(resetAction);
        return;
    }

    _navigator.dispatch(
        NavigationActions.navigate({
            routeName: routeName,
            params: { previousScreen: _.last(_navigator.state.nav.routes).routeName, ...params, },
        })
    );
};



export default {
    navigate,
    setTopLevelNavigator,
};
