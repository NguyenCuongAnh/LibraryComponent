import {Dimensions} from 'react-native';

export const {height, width} = Dimensions.get('window');
export const isTablet = width / height > 0.6;
export const guidelineBaseWidth = 411.42857142857144;
export const guidelineBaseHeight = 683.4285714285714;
export const hScale = (size: number) => (width / guidelineBaseWidth) * size;
export const vScale = (size: number) => (height / guidelineBaseHeight) * size;
export const radius = hScale(5);
 