import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  background-color: ${colors.secondary.backgroundColor};
  elevation: 3;
  gap: 8px;
`;

export const ItemTextContainer = styled.View`
  flex: 1;
`;

export const ItemTitle = styled.Text`
  font-size: 18px;
  font-family: ${fonts.bold};
  color: ${colors.primary.textColor};
`;

export const ItemArtist = styled.Text`
  font-size: 14px;
  font-family: ${fonts.regular};
  color: ${colors.primary.textColor};
`;
