import { format, parseISO } from 'date-fns';
import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { DailyDriveTime } from '../driven-time/time-chart/types';
import { fetchTimeData } from '../driven-time/time-chart/utils';
import {
  Container,
  DateText,
  ItemContainer,
  Separator,
  TimeText,
} from './styles';

export const History = () => {
  const [dailyTimes, setDailyTimes] = useState<DailyDriveTime[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const result = await fetchTimeData();
      setDailyTimes(result.dailyTimes);
    };

    loadData();
  }, []);

  return (
    <Container>
      <FlatList
        data={dailyTimes}
        renderItem={({ item }) => (
          <ItemContainer>
            <DateText>{format(parseISO(item.date), 'dd-MM-yyyy')}</DateText>
            <TimeText>{(item.timeInSeconds / 3600).toFixed(2)} horas</TimeText>
          </ItemContainer>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};
