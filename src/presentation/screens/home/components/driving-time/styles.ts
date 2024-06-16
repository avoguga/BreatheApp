import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import styled from 'styled-components/native';

export const DrivingTimeContainer = styled.View`
  padding: 10px 16px;
  gap: 8px;
  background-color: ${colors.secondary.backgroundColor};
`;

export const BaseDrivingText = styled.Text`
  font-size: 14px;
  font-family: ${fonts.regular};
  color: ${colors.primary.textColor};
`;
