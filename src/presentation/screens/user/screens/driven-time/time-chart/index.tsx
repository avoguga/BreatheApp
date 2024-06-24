import React from 'react';
import { View } from 'react-native';
import { CenterLabel, StyledPieChart } from '../styles';
import { TimeChartProps } from './types';

export const TimeChart: React.FC<TimeChartProps> = ({ pieData }) => {
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
        labelsPosition="onBorder"
        centerLabelComponent={() => <CenterLabel>Média</CenterLabel>}
      />
    </View>
  );
};
