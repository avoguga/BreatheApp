import { fonts } from '@/presentation/constants/fonts';
import { DriverTips } from '@/presentation/screens/driver-tips';
import { DrivingTimeSelector } from '@/presentation/screens/driving-time-selector';
import { ForgotPassword } from '@/presentation/screens/forgot-password';
import { Tip } from '@/presentation/screens/home/components/tips';
import { Login } from '@/presentation/screens/login';
import { Onboarding } from '@/presentation/screens/onboarding';
import { Pomodoro } from '@/presentation/screens/pomodoro';
import { Register } from '@/presentation/screens/register';
import { SongsList } from '@/presentation/screens/songs-list';
import { Splash } from '@/presentation/screens/splash';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigation } from '../tab';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  HomeTabs: undefined;
  DrivingTimeSelector: undefined;
  Pomodoro: undefined;
  DriverTips: {
    tip: Tip;
  };
  SongsList: {
    musicType: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerTitleStyle: {
        fontFamily: fonts.bold,
        fontSize: 24,
      },
      headerLeft: () => null,
    }}
    initialRouteName="HomeTabs"
  >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen
      name="HomeTabs"
      component={BottomTabNavigation}
      options={{
        headerShown: true,
        title: 'Home',
      }}
    />
    <Stack.Screen
      name="DrivingTimeSelector"
      options={{
        headerShown: true,
        title: 'Sessões de condução',
      }}
      component={DrivingTimeSelector}
    />
    <Stack.Screen name="Pomodoro" component={Pomodoro} />
    <Stack.Screen name="DriverTips" component={DriverTips} />
    <Stack.Screen
      name="SongsList"
      component={SongsList}
      options={{
        headerShown: true,
        title: 'Músicas',
      }}
    />
  </Stack.Navigator>
);
