import { Feather } from '@expo/vector-icons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import type { StyleProp, TextStyle, TouchableOpacityProps } from 'react-native';

export type IconType = IconProps<keyof typeof Feather.glyphMap> & {
  style?: StyleProp<TextStyle>;
};

export type MainButtonProps = {
  children: React.ReactNode;
} & TouchableOpacityProps;
