import notifee, {
  AndroidGroupAlertBehavior,
  AndroidImportance,
} from "@notifee/react-native";
import { useEffect, useState } from "react";
import { Vibration } from "react-native";
import BackgroundTimer from "react-native-background-timer";

import { useLanguageStore } from "@/infra/language";
import { SessionOption } from "@/presentation/screens/driving-time-selector";
import { usePomodoroStore } from "../../store";
import strings from "./utils/strings";

export const useCustomTimer = (initialSession: SessionOption) => {
  const [session, setSession] = useState<SessionOption>(initialSession);
  const { setTime, time, setTimeUntilBreak, timeUntilBreak, setMode, mode } =
    usePomodoroStore();
  const language = useLanguageStore((state) => state.language);

  useEffect(() => {
    setMode("work");
    setTimeUntilBreak(session.work);
    updateNotification(session.work, true);
  }, [session]);

  useEffect(() => {
    BackgroundTimer.start();

    const intervalId = BackgroundTimer.setInterval(() => {
      setTime(time + 1);
      if (timeUntilBreak > 0) {
        setTimeUntilBreak(timeUntilBreak - 1);
        updateNotification(timeUntilBreak);
      } else {
        switchMode();
        Vibration.vibrate();
      }
    }, 1000);

    return () => {
      BackgroundTimer.clearInterval(intervalId);
      BackgroundTimer.stop();
    };
  }, [time, timeUntilBreak, mode, session]);

  const switchMode = () => {
    const nextMode = mode === "work" ? "rest" : "work";
    const nextDuration = nextMode === "work" ? session.work : session.rest;

    Vibration.vibrate();
    setMode(nextMode);
    setTimeUntilBreak(nextDuration);
    updateNotification(nextDuration, true);
  };

  const updateNotification = async (timeLeft: number, isNewSession = false) => {
    const body = isNewSession
      ? mode === "work"
        ? strings[language].workNotificationBody(Math.floor(timeLeft / 60))
        : strings[language].restNotificationBody(Math.floor(timeLeft / 60))
      : `${strings[language].remainingTime}: ${Math.floor(timeLeft / 60)}:${
          timeLeft % 60 < 10 ? "0" : ""
        }${timeLeft % 60} ${strings[language].minutes}.`;

    const notificationId = "timer-notification";

    const channel = await notifee.getChannel("notification-timier");
    if (!channel) {
      await notifee.createChannel({
        id: "notification-timer",
        name: "notification-timer",
        vibration: false,
      });
    }

    await notifee.displayNotification({
      id: notificationId,
      title:
        mode === "work"
          ? strings[language].workNotificationTitle
          : strings[language].restNotificationTitle,
      body: body,
      android: {
        channelId: "notification-timer",
        smallIcon: "ic_launcher",
        importance: AndroidImportance.HIGH,
        ongoing: true,
        groupAlertBehavior: AndroidGroupAlertBehavior.SUMMARY,
      },
    });
  };

  const updateSession = (newSession: SessionOption) => {
    if (session.work !== newSession.work || session.rest !== newSession.rest) {
      setSession(newSession);
    }
  };

  return {
    timeUntilBreak,
    mode,
    updateSession,
  };
};
