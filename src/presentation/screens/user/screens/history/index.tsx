import { useLanguageStore } from '@/infra/language';
import { format, parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
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
import strings from './utils/strings';

export const History = () => {
  const [dailyTimes, setDailyTimes] = useState<DailyDriveTime[]>([]);
  const language = useLanguageStore((state) => state.language);

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
            <DateText>
              {format(parseISO(item.date), strings[language].dateFormat)}
            </DateText>
            <TimeText>
              {(item.timeInSeconds / 3600).toFixed(2)} {strings[language].hours}
            </TimeText>
          </ItemContainer>
        )}
        keyExtractor={(item) => item.date}
        ItemSeparatorComponent={() => <Separator />}
      />
    </Container>
  );
};
