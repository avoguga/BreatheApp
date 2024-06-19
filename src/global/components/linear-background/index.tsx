import React from 'react';
import { Dimensions } from 'react-native';
import { TouchableOpacityProps } from 'react-native-gesture-handler';
import Svg, { Defs, LinearGradient, Rect, Stop } from 'react-native-svg';
import { Content, LinearContainer } from './styles';

const { height } = Dimensions.get('window');

export const LinearBackground = ({ children }: TouchableOpacityProps) => (
  <LinearContainer>
    <Svg
      height="100%"
      width="100%"
      style={{ position: 'absolute', top: 0, left: 0 }}
    >
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <Stop offset="0.3" stopColor="#f5cf2f" stopOpacity="1" />
          <Stop offset="1" stopColor="#D9AD27" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height={height} fill="url(#grad)" />
    </Svg>
    <Content>{children}</Content>
  </LinearContainer>
);
