import styled from 'styled-components/native';

export const LinearContainer = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  z-index: 1;
  padding: 8px 16px;
`;

export const CardButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.85,
})``;
