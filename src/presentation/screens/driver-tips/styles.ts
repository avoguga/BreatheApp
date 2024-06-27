import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import styled from 'styled-components/native';

export const StyledScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})`
  background-color: ${colors.quaternary.backgroundColor};
  padding-vertical: 16px;
`;

export const TipContainer = styled.View`
  border-radius: 12px;
  background-color: ${colors.secondary.backgroundColor};
  width: 95%;
  padding: 16px;
  margin-bottom: 32px;
`;

export const TipImage = styled.Image`
  width: 100%;
  height: 250px;
  border-radius: 15px;
  margin-bottom: 30px;
  resize-mode: cover;
`;

export const TextContainer = styled.View`
  padding-horizontal: 10px;
  width: 100%;
`;

export const TitleText = styled.Text`
  font-size: 24px;
  font-family: ${fonts.bold};
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

export const DescriptionText = styled.Text`
  font-size: 18px;
  text-align: justify;
  color: #555;
  margin-bottom: 15px;
  font-family: ${fonts.regular};
`;

export const FullArticleText = styled.Text`
  font-size: 16px;
  text-align: justify;
  color: #666;
  line-height: 24px;
  padding-horizontal: 5px;
  margin-bottom: 10px;
  font-family: ${fonts.regular};
`;

export const LinksContainer = styled.View``;

export const LinksTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: ${fonts.regular};
  color: #333;
`;

export const LinkText = styled.Text`
  font-size: 16px;
  color: #007bff;
  font-family: ${fonts.regular};
`;
