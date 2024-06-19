import { Container } from "@/global/components/container";
import { MainButton } from "@/global/components/main-button";
import { colors } from "@/presentation/constants/colors";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatTime } from "../home/utils";
import { usePomodoroStore } from "../pomodoro/store";

type SessionOption = {
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
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
};

export const DrivingTimeSelector = () => {
  const navigation = useNavigation<any>();
  const [selectedSession, setSelectedSession] = useState<SessionOption>(
    SessionOptions[0]
  );
  const { time, timeUntilBreak } = usePomodoroStore();

  const handleSelectSession = (session: SessionOption): void => {
    setSelectedSession(session);
  };

  const handleStartSession = (): void => {
    navigation.navigate("Pomodoro", { session: selectedSession });
  };

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Escolha um item para iniciar a sessão</Text>
      <View style={styles.subTitleContainer}>
        <Feather name="clock" size={20} />
        <Text style={styles.subTitle}>
          Horas trabalhadas hoje: {formatTime(time)}
        </Text>
      </View>
      <View style={styles.subTitleContainer}>
        <Feather name="coffee" size={20} />
        <Text style={styles.subTitle}>
          Tempo até dar uma pausa: {formatTime(timeUntilBreak)}
        </Text>
      </View>
      <View style={styles.optionsContainer}>
        {SessionOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.sessionOption,
              selectedSession === option && styles.selectedSession,
            ]}
            onPress={() => handleSelectSession(option)}
          >
            <Text style={styles.optionText}>
              Trabalho: {formatTimeInMin(option.work)} - Descanso:{" "}
              {formatTimeInMin(option.rest)}
            </Text>
            {selectedSession === option && (
              <Feather name="check-circle" size={24} color="#4CAF50" />
            )}
          </TouchableOpacity>
        ))}
      </View>
      <MainButton style={styles.startButton} onPress={handleStartSession}>
        <MainButton.Text>Iniciar Sessão</MainButton.Text>
      </MainButton>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFF",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "left",
  },
  subTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF8E1",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  subTitle: {
    fontSize: 18,
    color: "#333",
    marginLeft: 10,
  },
  optionsContainer: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  sessionOption: {
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#DDD",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  selectedSession: {
    borderColor: "#4CAF50",
    backgroundColor: "#E8F5E9",
  },
  optionText: {
    color: "#333",
    fontSize: 16,
    textAlign: "center",
    flex: 1,
  },
  startButton: {
    marginTop: 20,
    backgroundColor: colors.primary.backgroundColor,
    borderRadius: 10,
  },
});

export default DrivingTimeSelector;
