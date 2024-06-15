import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import styled from 'styled-components/native';

export const LottieContainer = styled.View`
  flex: 1;
  background-color: ${colors.secondary.backgroundColor};
`;

export const SplashText = styled.Text`
  color: ${colors.primary.textColor};
  font-size: 24px;
  position: absolute;
  top: 400px;
  align-self: center;
  font-family: ${fonts.semibold};
`;
