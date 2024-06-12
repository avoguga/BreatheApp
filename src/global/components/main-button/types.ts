import { Feather } from "@expo/vector-icons";
import type { StyleProp, TextProps, TextStyle, TouchableOpacity, ViewProps, ViewStyle } from "react-native";

export type IconType = {
  name: keyof typeof Feather.glyphMap;
  style?: StyleProp<TextStyle>;
}

export type MainButtonProps = {
  children: React.ReactNode;
} & ViewProps;
