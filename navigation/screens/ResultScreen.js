import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Entypo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SearchScreen from "./SearchScreen";
import HomeScreen from "./HomeScreen";

const ResultScreen = () => {
  return (
    <Stack.Screen
      name="ResultScreen"
      component={ResultScreen}
      options={{
        title: "SMS Recipient Number",
        headerShown: true,
        headerTitleAlign: "center",
      }}
    />
  );
};

export default ResultScreen;
