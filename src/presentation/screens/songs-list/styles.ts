import { fonts } from '@/presentation/constants/fonts';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: ${fonts.bold};
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  padding: 5px 16px;
  margin-bottom: 20px;
  gap: 8px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  font-family: ${fonts.regular};
`;
