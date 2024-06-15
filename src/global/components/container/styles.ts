import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

export const BaseContainer = styled.View`
  padding-top: ${StatusBar.currentHeight}px;
  flex: 1;
`;
