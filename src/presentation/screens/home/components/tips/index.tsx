import { colors } from "@/presentation/constants/colors";
import { fonts } from "@/presentation/constants/fonts";
import { RootStackParamList } from "@/presentation/routes/stack";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { AppDriversTips } from "../../utils";
import { Card } from "../card";
import { HorizontalList } from "../horizontal-list";

export interface Tip {
  id: string;
  title: string;
  description: string;
  uri: string;
  fullArticleText: string;
  additionalLinks: any;
}

export const Tips = () => {
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
        Dicas para o motorista
      </Card.Text>

      <HorizontalList
        data={AppDriversTips}
        style={{ marginBottom: 16 }}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              navigation.navigate("DriverTips", { tip: item as Tip })
            }
          >
            <Card.Image source={{ uri: item.uri }}>
              <Card.Text>{item.title}</Card.Text>
              <Card.Text
                numberOfLines={3}
                style={{ fontFamily: fonts.regular, fontSize: 16 }}
              >
                {item.description}
              </Card.Text>
            </Card.Image>
          </Card>
        )}
      />
    </>
  );
};
