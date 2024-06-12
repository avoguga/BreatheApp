import { MainButton } from "@/global/components/main-button";
import { View } from "react-native";

const Home = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <MainButton>
        <MainButton.IconView style={{ backgroundColor: "yellow" }}>
          <MainButton.Icon name="activity"/>
        </MainButton.IconView>
        <MainButton.Text>Bom dia</MainButton.Text>
      </MainButton>
    </View>
  );
};

export { Home };
