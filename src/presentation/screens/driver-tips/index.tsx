import { useLanguageStore } from "@/infra/language";
import { RootStackParamList } from "@/presentation/routes/stack";
import { StackScreenProps } from "@react-navigation/stack";
import { Linking, TouchableOpacity } from "react-native";
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
} from "./styles";
import strings from "./utils/strings";

type DriverTipsProps = StackScreenProps<RootStackParamList, "DriverTips">;

export const DriverTips: React.FC<DriverTipsProps> = ({ route }) => {
  const { tip } = route.params;
  const language = useLanguageStore((state) => state.language);
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
            <LinksTitle>{strings[language].readMore}</LinksTitle>
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
