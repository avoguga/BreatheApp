import { initializeNotifee, scheduleHealthReminders } from '@/infra/notifee';
import { Routes } from '@/presentation/routes';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import { useFonts } from 'expo-font';
import { useCallback, useEffect } from 'react';
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const setUpNotifee = useCallback(async () => {
    initializeNotifee();
    scheduleHealthReminders();
  }, []);

  useEffect(() => {
    setUpNotifee();
  }, [setUpNotifee]);

  if (!fontsLoaded) return null;
  return <Routes />;
}
