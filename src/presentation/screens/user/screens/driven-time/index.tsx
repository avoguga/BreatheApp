import { Container } from '@/global/components/container';
import React from 'react';
import { LegendBar } from './components/legend-bar';
import { StatsDetails } from './components/stats-detail';
import { useDrivenTime } from './hooks/use-driven-time';
import { TimeChart } from './time-chart';

export const DrivenTime = () => {
  const { data, pieData } = useDrivenTime();
  return (
    <Container
      contentContainerStyle={{
        alignItems: 'center',
      }}
    >
      <TimeChart pieData={pieData} />
      <StatsDetails data={data} pieData={pieData} />
      <LegendBar pieData={pieData} />
    </Container>
  );
};
