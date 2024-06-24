import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const ItemContainer = styled.View`
  background-color: ${colors.secondary.backgroundColor};
  padding: 22px 15px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 16px;
  color: ${colors.primary.textColor};
  font-family: ${fonts.regular};
`;

export const TimeText = styled.Text`
  font-size: 16px;
  color: ${colors.primary.textColor};
  font-family: ${fonts.regular};
`;

export const Separator = styled.View`
  height: 1px;
  background-color: #ccc;
  width: 100%;
`;
