import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import styled from 'styled-components/native';

export const TimerContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TimerText = styled.Text`
  font-size: 48px;
  font-family: ${fonts.regular};
  position: absolute;
  text-align: center;
  color: ${colors.secondary.textColor};
`;
