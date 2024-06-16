import { fonts } from '@/presentation/constants/fonts';
import { Pomodoro } from '@/presentation/screens/pomodoro';
import { Splash } from '@/presentation/screens/splash';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigation } from '../tab';

const Stack = createStackNavigator();

export const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerTitleStyle: { fontFamily: fonts.bold, fontSize: 24 },
      headerLeft: () => null,
    }}
  >
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen
      name="HomeTabs"
      component={BottomTabNavigation}
      options={{
        headerShown: true,
        title: 'Home',
      }}
    />
    <Stack.Screen name="Pomodoro" component={Pomodoro} />
  </Stack.Navigator>
);
