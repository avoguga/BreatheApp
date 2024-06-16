import { ImageBackgroundProps, TouchableOpacityProps } from 'react-native';
import { TextProps } from 'react-native-svg';

export interface ICardContainer extends TouchableOpacityProps {}
export interface ICardText extends TextProps {}
export interface ICardImage extends ImageBackgroundProps {}
