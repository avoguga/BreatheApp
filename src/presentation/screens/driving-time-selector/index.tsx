import { Container } from '@/global/components/container';
import { MainButton } from '@/global/components/main-button';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { formatTime } from '../home/utils';
import { usePomodoroStore } from '../pomodoro/store';
import {
  MainButtonText,
  OptionText,
  OptionsContainer,
  SessionOption,
  SubTitle,
  SubTitleContainer,
  Title,
} from './styles';

export type SessionOption = {
  work: number;
  rest: number;
  total: number;
};

const SessionOptions: SessionOption[] = [
  { work: 10, rest: 5, total: 30 }, // Opção de teste - 10 sec de trabalho e 5 de descanso.
  { work: 5400, rest: 900, total: 28800 }, // 90 min trabalho, 15 min descanso, 8 horas total
  { work: 7200, rest: 1800, total: 32400 }, // 120 min trabalho, 30 min descanso, 9 horas total
  { work: 9000, rest: 1800, total: 36000 }, // 150 min trabalho, 30 min descanso, 10 horas total
];

const formatTimeInMin = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}`;
};

export const DrivingTimeSelector = () => {
  const navigation = useNavigation<any>();
  const [selectedSession, setSelectedSession] = useState<SessionOption>(
    SessionOptions[0]
  );
  const { time, timeUntilBreak, setMode, mode } = usePomodoroStore();

  const handleSelectSession = (session: SessionOption): void => {
    setSelectedSession(session);
  };

  const handleStartSession = (): void => {
    setMode('work');
    navigation.navigate('Pomodoro', { session: selectedSession });
  };

  return (
    <Container style={{ padding: 16 }}>
      <Title>Escolha um item para iniciar a sessão</Title>
      <SubTitleContainer>
        <Feather name="clock" size={20} />
        <SubTitle>Horas trabalhadas hoje: {formatTime(time)}</SubTitle>
      </SubTitleContainer>
      <SubTitleContainer>
        <Feather name="coffee" size={20} />
        <SubTitle>
          Tempo até {mode === 'work' ? 'dar uma pausa' : 'voltar ao trabalho'}:{' '}
          {formatTime(timeUntilBreak)}
        </SubTitle>
      </SubTitleContainer>
      <OptionsContainer>
        {SessionOptions.map((option, index) => (
          <SessionOption
            key={index}
            selected={selectedSession === option}
            onPress={() => handleSelectSession(option)}
          >
            <OptionText>
              Trabalho: {formatTimeInMin(option.work)} - Descanso:{' '}
              {formatTimeInMin(option.rest)}
            </OptionText>
            {selectedSession === option && (
              <Feather name="check-circle" size={24} color="#4CAF50" />
            )}
          </SessionOption>
        ))}
      </OptionsContainer>
      <MainButton onPress={handleStartSession}>
        <MainButtonText>Iniciar Sessão</MainButtonText>
      </MainButton>
    </Container>
  );
};

export default DrivingTimeSelector;
