/** @format */
import './global';

import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';

import App from './App';

console.ignoredYellowBox = ["Remote debugger"];
YellowBox.ignoreWarnings([
    "Warning: isMounted(...) is deprecated",
    "Module RCTImageLoader",
    "Module RNOS requires",
    "Method `jumpToIndex` is deprecated."
]);

AppRegistry.registerComponent(appName, () => App);
