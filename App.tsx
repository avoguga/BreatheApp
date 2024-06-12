import { Routes } from "@/presentation/routes";
import { Home } from "@/presentation/screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";

export default function App() {
  const { Navigator, Screen } = createStackNavigator()
  return (
    <Routes/>
  );
}
