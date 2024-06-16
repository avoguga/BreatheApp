import { MainButton } from '@/global/components/main-button';
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
          <MainButton
            style={{
              alignSelf: 'flex-start',
              backgroundColor: '#336665',
              marginTop: 8,
            }}
          >
            <MainButton.Text>Começar a dirigir</MainButton.Text>
          </MainButton>
        </Card.Image>
      </Card>
    )}
  />
);
