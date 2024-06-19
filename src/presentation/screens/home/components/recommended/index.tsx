import { MainButton } from "@/global/components/main-button";
import { colors } from "@/presentation/constants/colors";
import { RootStackParamList } from "@/presentation/routes/stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { mockRecomended } from "../../utils";
import { Card } from "../card";
import { HorizontalList } from "../horizontal-list";

export const Recommended = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <>
      <Card.Text
        style={{
          color: colors.primary.textColor,
          textAlign: "left",
          marginLeft: 16,
        }}
      >
        Sons para relaxar
      </Card.Text>
      <HorizontalList
        data={mockRecomended}
        renderItem={({ item }) => (
          <Card>
            <Card.Image source={{ uri: item.uri }}>
              <Card.Text>{item.title}</Card.Text>
              <MainButton
                onPress={() =>
                  navigation.navigate("SongsList", { musicType: item.title })
                }
                style={{
                  backgroundColor: "transparent",
                  position: "absolute",
                  flex: 1,
                  bottom: 8,
                  left: 16,
                }}
              >
                <MainButton.IconView>
                  <MainButton.Icon
                    name="headphones"
                    size={28}
                    color={colors.secondary.backgroundColor}
                  />
                  <MainButton.Icon
                    name="book"
                    size={28}
                    color={colors.secondary.backgroundColor}
                  />
                </MainButton.IconView>
              </MainButton>
            </Card.Image>
          </Card>
        )}
      />
    </>
  );
};
