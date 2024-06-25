import { AuthProvider } from "@/contexts/auth-provider";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigation } from "./stack";

export const Routes = () => (
  <AuthProvider>
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  </AuthProvider>
);
