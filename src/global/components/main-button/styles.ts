import { colors } from '@/presentation/constants/colors';
import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  background-color: ${colors.primary.backgroundColor};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 10px 8px;
  gap: 8px;
`;

export const IconView = styled.View`
  border-radius: 100px;
  flex-direction: row;
  gap: 8px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;
