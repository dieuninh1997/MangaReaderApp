import { moderateScale, verticalScale } from 'react-native-size-matters';


export const Colors = {
    primary: '#6aa0ff',
    lightenPrimary: '#cedcff',
    secondary: '#7c8580',
    lightenSecondary: '#dce2e0',
    warning: '#f3c12e',
    info: '#FFFFFF',
    danger: '#ff3600',
    link: '#265799',
    button: '#8c9aff',
    active: '#ffe69c',

    //mau chu
    lightText: '#6b6b6b',
    darkText: '#191919',

    //mau nen
    lightBackground: '#f2f2f2',

    //mau sac
    black: '#000000',
    pink: '#ffc4b2',
    gray: '#c4bec0',
    lightGray: '#bab8b8'
};


export const FontSizes = {
    large: moderateScale(32),
    h1: moderateScale(28),
    h2: moderateScale(26),
    h3: moderateScale(24),
    h4: moderateScale(22),
    h5: moderateScale(20),
    h6: moderateScale(18),
    p: moderateScale(16),
    small: moderateScale(14),
    extraSmall: moderateScale(12),
};


export const Sizes = {
    s1: moderateScale(5),
    s2: moderateScale(10),
    s3: moderateScale(15),
    s4: moderateScale(20),
    s5: moderateScale(25),
    s6: moderateScale(30),
    s7: moderateScale(35),
    s8: moderateScale(40),
    s9: moderateScale(45),
    s10: moderateScale(50),

    v1: verticalScale(5),
    v2: verticalScale(10),
    v3: verticalScale(15),
    v4: verticalScale(20),
    v5: verticalScale(25),
    v6: verticalScale(30),
    v7: verticalScale(35),
    v8: verticalScale(40),
    v9: verticalScale(45),
    v10: verticalScale(50),
};

