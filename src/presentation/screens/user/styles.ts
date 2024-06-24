import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import styled from 'styled-components/native';

export const ItemContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ItemTextContainer = styled.View`
  flex: 1;
`;

export const ItemTitle = styled.Text`
  font-size: 20px;
  font-family: ${fonts.semibold};
  color: ${colors.primary.textColor};
`;

export const ItemDescription = styled.Text`
  font-size: 16px;
  color: #666;
  font-family: ${fonts.regular};
`;
