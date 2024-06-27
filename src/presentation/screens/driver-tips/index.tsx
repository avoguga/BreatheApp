import { RootStackParamList } from '@/presentation/routes/stack';
import { StackScreenProps } from '@react-navigation/stack';
import { Linking, TouchableOpacity } from 'react-native';
import {
  DescriptionText,
  FullArticleText,
  LinkText,
  LinksContainer,
  LinksTitle,
  StyledScrollView,
  TextContainer,
  TipContainer,
  TipImage,
  TitleText,
} from './styles';

type DriverTipsProps = StackScreenProps<RootStackParamList, 'DriverTips'>;

export const DriverTips: React.FC<DriverTipsProps> = ({ route }) => {
  const { tip } = route.params;
  const regex = /(?<=[.?!])\s+(?=[A-Z"“])/;
  const paragraphs = tip.fullArticleText.split(regex).filter((p) => p);

  const openLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <StyledScrollView>
      <TipContainer>
        <TipImage source={{ uri: tip.uri }} />
        <TextContainer>
          <TitleText>{tip.title}</TitleText>
          <DescriptionText>{tip.description}</DescriptionText>
          {paragraphs.map((paragraph, index) => (
            <FullArticleText key={index}>{paragraph.trim()}</FullArticleText>
          ))}
          <LinksContainer>
            <LinksTitle>Leia mais:</LinksTitle>
            {tip.additionalLinks.map((link: any, index: any) => (
              <TouchableOpacity key={index} onPress={() => openLink(link.url)}>
                <LinkText>{link.title}</LinkText>
              </TouchableOpacity>
            ))}
          </LinksContainer>
        </TextContainer>
      </TipContainer>
    </StyledScrollView>
  );
};
