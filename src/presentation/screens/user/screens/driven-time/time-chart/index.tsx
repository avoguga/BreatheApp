import { useLanguageStore } from '@/infra/language';
import React from 'react';
import { View } from 'react-native';
import { CenterLabel, StyledPieChart } from '../styles';
import { TimeChartProps } from './types';
import strings from './utils';

export const TimeChart: React.FC<TimeChartProps> = ({ pieData }) => {
  const language = useLanguageStore((state) => state.language);

  return (
    <View
      style={{
        padding: 20,
        alignItems: 'center',
        width: '100%',
      }}
    >
      <StyledPieChart
        data={pieData}
        donut={true}
        showText={true}
        isAnimated
        strokeWidth={1}
        labelsPosition="onBorder"
        centerLabelComponent={() => (
          <CenterLabel>{strings[language].average}</CenterLabel>
        )}
      />
    </View>
  );
};
