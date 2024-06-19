import { Container } from "@/global/components/container";
import { MainButton } from "@/global/components/main-button";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type SessionOption = {
  work: number;
  rest: number;
  total: number;
};

const SessionOptions: SessionOption[] = [
  { work: 5400, rest: 900, total: 28800 }, // 90 min work, 15 min rest, 8 hours total
  { work: 7200, rest: 1800, total: 32400 }, // 120 min work, 30 min rest, 9 hours total
  { work: 9000, rest: 1800, total: 36000 }, // 150 min work, 30 min rest, 10 hours total
];

const formatTime = (seconds: number): string => {
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

  const handleSelectSession = (session: SessionOption): void => {
    setSelectedSession(session);
  };

  const handleStartSession = (): void => {
    navigation.navigate("Pomodoro", { session: selectedSession });
  };

  return (
    <Container style={styles.container}>
      <Text style={styles.title}>Escolha sua sessão de condução</Text>
      <Text style={styles.subTitle}>
        Horas trabalhadas hoje: sla tem que definir
      </Text>
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
            Trabalho: {formatTime(option.work)} - Descanso:{" "}
            {formatTime(option.rest)}
          </Text>
          {selectedSession === option && (
            <Icon name="check-circle" size={24} color="#4CAF50" />
          )}
        </TouchableOpacity>
      ))}
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
    marginTop: 40,
    marginBottom: 10,
    textAlign: "center",
  },
  subTitle: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  sessionOption: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F6F6F6",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  selectedSession: {
    borderColor: "#4CAF50",
    backgroundColor: "#DFF0D8",
  },
  optionText: {
    color: "#333",
    fontSize: 16,
    textAlign: "center",
  },
  startButton: {
    marginTop: 20,
    backgroundColor: "#3366CC",
  },
});
