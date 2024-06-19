import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import styled from 'styled-components/native';

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
  gap: 8px;
  border-bottom-width: 1px;
  border-color: ${colors.primary.backgroundColor};
`;

export const ItemTextContainer = styled.View`
  flex: 1;
`;

export const ItemTitle = styled.Text`
  font-size: 18px;
  font-family: ${fonts.bold};
  color: ${colors.secondary.textColor};
`;

export const ItemArtist = styled.Text`
  font-size: 14px;
  font-family: ${fonts.regular};
  color: ${colors.secondary.textColor};
`;

export const Player = styled.TouchableOpacity.attrs({ activeOpacity: 0.8 })`
  padding: 8px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;
