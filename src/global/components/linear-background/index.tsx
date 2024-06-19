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
          <Stop offset="0" stopColor="#E5BE00" stopOpacity="0.85" />
          <Stop offset="1" stopColor="#D9BE36" stopOpacity="0.9" />
        </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height={height} fill="url(#grad)" />
    </Svg>
    <Content>{children}</Content>
  </LinearContainer>
);
