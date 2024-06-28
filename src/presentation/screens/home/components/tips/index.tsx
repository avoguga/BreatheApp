import { useLanguageStore } from '@/infra/language';
import { colors } from '@/presentation/constants/colors';
import { fonts } from '@/presentation/constants/fonts';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import strings from '../../utils';
import { Card } from '../card';
import { HorizontalList } from '../horizontal-list';

export interface Tip {
  id: string;
  title: string;
  description: string;
  uri: string;
  fullArticleText: string;
  additionalLinks: any;
}

export const Tips = () => {
  const navigation = useNavigation();
  const language = useLanguageStore((state) => state.language);
  const tips = strings[language].tips;

  return (
    <>
      <Card.Text
        style={{
          color: colors.primary.textColor,
          textAlign: 'left',
          marginLeft: 16,
        }}
      >
        {language === 'en' ? 'Driver Tips' : 'Dicas para o motorista'}
      </Card.Text>

      <HorizontalList
        data={tips}
        style={{ marginBottom: 16 }}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              navigation.navigate('DriverTips', { tip: item as Tip })
            }
          >
            <Card.Image source={{ uri: item.uri }}>
              <Card.Text>{item.title}</Card.Text>
              <Card.Text
                numberOfLines={3}
                style={{ fontFamily: fonts.regular, fontSize: 16 }}
              >
                {item.description}
              </Card.Text>
            </Card.Image>
          </Card>
        )}
      />
    </>
  );
};
