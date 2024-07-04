import { colors } from "@/presentation/constants/colors";
import { RootStackParamList } from "@/presentation/routes/stack";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect } from "react";
import { View } from "react-native";
import AnimatedCircle from "./components/timer";
import { useCustomTimer } from "./hooks/use-custom-timer";

export const Pomodoro = () => {
  const { session } =
    useRoute<RouteProp<RootStackParamList, "Pomodoro">>().params;
  const { timeUntilBreak, mode, updateSession } = useCustomTimer(session);

  useEffect(() => {
    updateSession(session);
  }, [session]);

  return (
    <View
      style={{
        backgroundColor:
          mode === "rest" ? "#0D21A1" : colors.primary.backgroundColor,
        flex: 1,
        justifyContent: "center",
      }}
    >
      <AnimatedCircle
        backgroundColor="transparent"
        size={200}
        tintColor="#fff"
        timeLeft={timeUntilBreak}
        totalDuration={mode === "rest" ? session.rest : session.work}
      />
    </View>
  );
};
