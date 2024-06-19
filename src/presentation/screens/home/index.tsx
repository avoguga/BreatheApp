import { Container } from "@/global/components/container";
import { MainButton } from "@/global/components/main-button";
import { displayNotification } from "@/infra/notifee";
import { AndroidImportance } from "@notifee/react-native";
import { useNavigation } from "@react-navigation/native";
import { DrivingTime } from "./components/driving-time";
import { Recommended } from "./components/recommended";
import { Tips } from "./components/tips";

const Home = () => {
  const { navigate } = useNavigation();

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
      <Tips />
      <Recommended />
    </Container>
  );
};

export { Home };
