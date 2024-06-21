import { fonts } from '@/presentation/constants/fonts';
import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { LegendItem } from './components/legend';
import { fetchTimeData } from './utils';

type AveragesAndWorkTime = {
  dailyAverage: number;
  weeklyAverage: number;
  monthlyAverage: number;
  daysWorked: number;
  weeksWorked: number;
  monthsWorked: number;
};

export const TimeChart = () => {
  const [data, setData] = useState<AveragesAndWorkTime>({
    dailyAverage: 0,
    weeklyAverage: 0,
    monthlyAverage: 0,
    daysWorked: 0,
    weeksWorked: 0,
    monthsWorked: 0,
  });
  console.log(data);
  useEffect(() => {
    fetchTimeData().then(setData);
  }, []);

  const pieData = [
    {
      value: data.dailyAverage,
      color: '#336665',
      label: 'Média diária',
    },
    {
      value: data.weeklyAverage,
      color: '#437775',
      label: 'Média semanal',
    },
    {
      value: data.monthlyAverage,
      color: '#235555',
      label: 'Média mensal',
    },
  ];

  return (
    <View
      style={{
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: Dimensions.get('window').width,
      }}
    >
      <PieChart
        data={pieData}
        donut={true}
        showText={true}
        isAnimated
        labelsPosition="onBorder"
        centerLabelComponent={() => (
          <Text style={{ fontSize: 18, fontFamily: fonts.regular }}>Média</Text>
        )}
      />
      <View style={{ marginTop: 20 }}>
        {pieData.map((item, index) => (
          <Text
            key={index}
            style={{
              fontSize: 14,
              fontFamily: fonts.regular,
              color: item.color,
              marginVertical: 4,
            }}
          >
            {item.label}: {item.value.toFixed(2)} horas
          </Text>
        ))}
        <Text style={{ fontSize: 14, fontFamily: fonts.regular }}>
          Dias trabalhados: {data.daysWorked}
        </Text>
        <Text style={{ fontSize: 14, fontFamily: fonts.regular }}>
          Semanas trabalhadas: {data.weeksWorked.toFixed(1)}
        </Text>
        <Text style={{ fontSize: 14, fontFamily: fonts.regular }}>
          Meses trabalhados: {data.monthsWorked.toFixed(1)}
        </Text>
      </View>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        {pieData.map((data) => (
          <LegendItem key={data.value} color={data.color} label={data.label} />
        ))}
      </View>
    </View>
  );
};
