import { useLanguageStore } from "@/infra/language";
import React from "react";
import { Switch } from "react-native";
import {
  Container,
  ItemContainer,
  NotificationText,
  Separator,
} from "./styles";
import strings from "./utils/strings";

export const Language = () => {
  const { language, setLanguage } = useLanguageStore();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <Container>
      <ItemContainer
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <NotificationText>{strings[language].languageSetting}</NotificationText>
        <Switch
          trackColor={{ false: "#767577", true: "#767577" }}
          thumbColor={language === "en" ? "#f4f3f4" : "#f4f3f4"}
          onValueChange={toggleLanguage}
          value={language === "en"}
        />
      </ItemContainer>
      <Separator />
    </Container>
  );
};
