import { MainButton } from '@/global/components/main-button';
import { fonts } from '@/presentation/constants/fonts';
import { mock } from '../../utils';
import { Card } from '../card';
import { HorizontalList } from '../horizontal-list';

export const HealthyDiets = () => (
  <HorizontalList
    data={mock}
    renderItem={({ item }) => (
      <Card>
        <Card.Image source={{ uri: item.uri }}>
          <Card.Text>{item.title}</Card.Text>
          <Card.Text
            numberOfLines={3}
            style={{ fontFamily: fonts.regular, fontSize: 16 }}
          >
            {item.description}
          </Card.Text>
          <MainButton
            style={{
              backgroundColor: 'transparent',
              alignSelf: 'flex-start',
              position: 'absolute',
              bottom: 8,
              left: 8,
            }}
          >
            <MainButton.Text>Ver mais</MainButton.Text>
          </MainButton>
        </Card.Image>
      </Card>
    )}
  />
);
