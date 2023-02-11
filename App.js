import * as React from "react";
import MainContainer from "./navigation/MainContainer";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Entypo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./navigation/screens/SearchScreen";
import ResultScreen from "./navigation/screens/ResultScreen";

const Drawer = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Search" component={SearchScreen} />
      <Drawer.Screen name="Result" component={ResultScreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return <MainContainer />;
}

export default App;
