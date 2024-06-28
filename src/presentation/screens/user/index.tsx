import { useLanguageStore } from '@/infra/language';
import { colors } from '@/presentation/constants/colors';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import {
  ItemContainer,
  ItemDescription,
  ItemTextContainer,
  ItemTitle,
} from './styles';
import strings from './utils';

export const User = () => {
  const { navigate } = useNavigation();
  const language = useLanguageStore((state) => state.language);
  const statOptions = strings[language].statOptions;

  return (
    <FlatList
      data={statOptions}
      contentContainerStyle={{ gap: 8 }}
      renderItem={({ item }) => (
        <ItemContainer onPress={() => navigate(item.screen as never)}>
          <ItemTextContainer>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemDescription>{item.description}</ItemDescription>
          </ItemTextContainer>
          <Feather
            name="chevron-right"
            size={24}
            color={colors.primary.textColor}
          />
        </ItemContainer>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
