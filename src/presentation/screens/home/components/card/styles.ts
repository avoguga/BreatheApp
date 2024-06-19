import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import styled from 'styled-components/native';

export const BaseCardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.95,
})`
  width: 300px;
  height: 200px;
  border-radius: 10px;
  align-self: center;
  overflow: hidden;
`;

export const BackgroundImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const BaseCardText = styled.Text`
  text-align: center;
  font-size: 20px;
  color: ${colors.secondary.textColor};
  font-family: ${fonts.bold};
  padding: 0 8px;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width: 200px;
  background-color: red;
  border-radius: 15px;
  align-self: center;
  justify-content: center;
  top: 50px;
`;
