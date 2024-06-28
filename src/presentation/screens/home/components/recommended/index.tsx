import { MainButton } from '@/global/components/main-button';
import { useLanguageStore } from '@/infra/language';
import { colors } from '@/presentation/constants/colors';
import { RootStackParamList } from '@/presentation/routes/stack';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import stringsTipsAndRecommended from '../../utils';
import strings from '../../utils/strings';
import { Card } from '../card';
import { HorizontalList } from '../horizontal-list';

export const Recommended = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const language = useLanguageStore((state) => state.language);

  return (
    <>
      <Card.Text
        style={{
          color: colors.primary.textColor,
          textAlign: 'left',
          marginLeft: 16,
        }}
      >
        {strings[language].relaxingSounds}
      </Card.Text>
      <HorizontalList
        data={stringsTipsAndRecommended[language].recommended}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              navigation.navigate('SongsList', { musicType: item.title })
            }
          >
            <Card.Image source={{ uri: item.uri }}>
              <Card.Text>{item.title}</Card.Text>
              <MainButton
                style={{
                  backgroundColor: 'transparent',
                  position: 'absolute',
                  flex: 1,
                  bottom: 8,
                  left: 16,
                }}
              >
                <MainButton.IconView>
                  <MainButton.Icon
                    name="headphones"
                    size={28}
                    color={colors.secondary.backgroundColor}
                  />
                  <MainButton.Icon
                    name="book"
                    size={28}
                    color={colors.secondary.backgroundColor}
                  />
                </MainButton.IconView>
              </MainButton>
            </Card.Image>
          </Card>
        )}
      />
    </>
  );
};
