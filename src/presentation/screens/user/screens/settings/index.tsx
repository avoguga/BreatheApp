import { useLanguageStore } from '@/infra/language';
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
import strings from './utils/strings';

export const Settings = () => {
  const {
    isEnabled,
    stretchInterval,
    waterInterval,
    setStretchInterval,
    setWaterInterval,
    toggleSwitch,
  } = useNotificationSettings();
  const language = useLanguageStore((state) => state.language);

  const stretchOptions = [
    { label: strings[language].oneHour, value: strings[language].oneHour },
    { label: strings[language].twoHours, value: strings[language].twoHours },
    {
      label: strings[language].threeHours,
      value: strings[language].threeHours,
    },
  ];
  const waterOptions = [
    {
      label: strings[language].thirtyMinutes,
      value: strings[language].thirtyMinutes,
    },
    { label: strings[language].oneHour, value: strings[language].oneHour },
    { label: strings[language].twoHours, value: strings[language].twoHours },
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
        <NotificationText>
          {strings[language].notificationsActive}
        </NotificationText>
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
        accordionTitle={strings[language].stretchInterval}
        collapsable
        selectedValue={stretchInterval}
        onSelect={setStretchInterval}
      />
      <Separator />
      <Accordion
        data={waterOptions}
        accordionTitle={strings[language].waterInterval}
        collapsable
        selectedValue={waterInterval}
        onSelect={setWaterInterval}
      />
    </Container>
  );
};
