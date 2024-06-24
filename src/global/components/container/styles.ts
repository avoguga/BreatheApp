import { colors } from '@/presentation/constants/colors';
import styled from 'styled-components/native';

export const BaseContainer = styled.ScrollView.attrs({
  contentContainerStyle: { paddingBottom: 16 },
})`
  flex: 1;
  background-color: ${colors.secondary.backgroundColor};
`;
