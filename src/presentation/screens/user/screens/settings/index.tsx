import React from 'react';
import { Switch } from 'react-native';
import { Accordion } from './components/accordion';
import {
  Container,
  ItemContainer,
  NotificationText,
  Separator,
} from './styles';
import { useNotificationSettings } from './use-settings';

export const Settings = () => {
  const {
    isEnabled,
    stretchInterval,
    waterInterval,
    setStretchInterval,
    setWaterInterval,
    toggleSwitch,
  } = useNotificationSettings();

  const stretchOptions = [
    { label: '1 hora', value: '1 hora' },
    { label: '2 horas', value: '2 horas' },
    { label: '3 horas', value: '3 horas' },
  ];
  const waterOptions = [
    { label: '30 minutos', value: '30 minutos' },
    { label: '1 hora', value: '1 hora' },
    { label: '2 horas', value: '2 horas' },
  ];

  return (
    <Container>
      <ItemContainer
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NotificationText>Notificações Ativas:</NotificationText>
        <Switch
          trackColor={{ false: '#767577', true: '#767577' }}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </ItemContainer>
      <Separator />
      <Accordion
        data={stretchOptions}
        accordionTitle="Intervalo para alongamento"
        collapsable
        selectedValue={stretchInterval}
        onSelect={setStretchInterval}
      />
      <Separator />
      <Accordion
        data={waterOptions}
        accordionTitle="Intervalo para água"
        collapsable
        selectedValue={waterInterval}
        onSelect={setWaterInterval}
      />
    </Container>
  );
};
