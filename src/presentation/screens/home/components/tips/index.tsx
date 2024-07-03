import { useLanguageStore } from "@/infra/language";
import { colors } from "@/presentation/constants/colors";
import { fonts } from "@/presentation/constants/fonts";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
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
  const [tips, setTips] = useState<Tip[]>([]);
  const navigation = useNavigation();
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const tipsCollection = await firestore()
          .collection("tips")
          .doc("UA7F1kwkdAyEXNVWvNB5")
          .get();
        if (tipsCollection.exists) {
          const data = tipsCollection.data();
          if (data && data[language] && data[language].tips) {
            setTips(data[language].tips);
          }
        }
      } catch (error) {
        console.error("Error fetching tips: ", error);
      }
    };

    fetchTips();
  }, [language]);

  return (
    <>
      <Card.Text
        style={{
          color: colors.primary.textColor,
          textAlign: "left",
          marginLeft: 16,
        }}
      >
        {language === "en" ? "Driver Tips" : "Dicas para o motorista"}
      </Card.Text>

      <HorizontalList
        data={tips}
        style={{ marginBottom: 16 }}
        renderItem={({ item }) => (
          <Card
            onPress={() =>
              // @ts-ignore
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
