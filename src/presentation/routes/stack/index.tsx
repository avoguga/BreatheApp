import { fonts } from "@/presentation/constants/fonts";
import { ForgotPassword } from "@/presentation/screens/forgot-password";
import { Login } from "@/presentation/screens/login";
import { Onboarding } from "@/presentation/screens/onboarding";
import { Pomodoro } from "@/presentation/screens/pomodoro";
import { Register } from "@/presentation/screens/register";
import { Splash } from "@/presentation/screens/splash";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabNavigation } from "../tab";

const Stack = createStackNavigator();

export const StackNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      headerTitleStyle: {
        fontFamily: fonts.bold,
        fontSize: 24,
        borderBottomWidth: 0.5,
      },
      headerLeft: () => null,
    }}
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
        title: "Home",
      }}
    />
    <Stack.Screen name="Pomodoro" component={Pomodoro} />
  </Stack.Navigator>
);
