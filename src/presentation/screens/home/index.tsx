import { Container } from "@/global/components/container";
import { MainButton } from "@/global/components/main-button";
import { displayNotification } from "@/infra/notifee";
import { AndroidImportance } from "@notifee/react-native";
import { useNavigation } from "@react-navigation/native";
import { usePomodoroStore } from "../pomodoro/store";
import { DrivingTime } from "./components/driving-time";
import { HealthyDiets } from "./components/healthy-diets";
import { Recommended } from "./components/recommended";
import { formatTime } from "./utils";

const Home = () => {
  const { navigate } = useNavigation();
  const { time, timeUntilBreak } = usePomodoroStore();

  return (
    <Container>
      <MainButton
        onPress={() =>
          displayNotification({
            title: `<p style="color: #f07f07;">AINN GUSZINHOUNNN</p>`,
            body: `<p style="color: #4caf50;">NOTIFICAçAUMZINHAS NN</p>`,
            android: {
              channelId: "default",
              importance: AndroidImportance.HIGH,
              localOnly: true,
            },
          })
        }
      >
        <MainButton.Text>Mostrar notificaçeun</MainButton.Text>
      </MainButton>
      <DrivingTime style={{ marginBottom: 16 }}>
        <DrivingTime.Text>
          Tempo total dirigindo: {formatTime(time)}
        </DrivingTime.Text>
        <DrivingTime.Text>
          Tempo até dar uma pausa: {formatTime(timeUntilBreak)}
        </DrivingTime.Text>
        <MainButton
          onPress={() => navigate("DrivingTimeSelector" as never)}
          style={{
            alignSelf: "flex-start",
            backgroundColor: "#336665",
            marginTop: 8,
          }}
        >
          <MainButton.Text>Começar a dirigir</MainButton.Text>
        </MainButton>
      </DrivingTime>
      <HealthyDiets />
      <Recommended />
    </Container>
  );
};

export { Home };
