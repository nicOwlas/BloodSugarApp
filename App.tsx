import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Icon } from "react-native-elements";
import { NewLogScreen, SettingsScreen } from "./src/screens";
import HomeScreen from "./src/screens/HomeScreen";

type RootStackParams = {
  TabNavigator: undefined;
  NewLog: undefined;
};

type TabNavigatorParams = {
  Home: undefined;
  Settings: undefined;
};

const RootStack = createStackNavigator<RootStackParams>();
const Tab = createBottomTabNavigator<TabNavigatorParams>();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="NewLog"
          component={NewLogScreen}
          options={{ presentation: "modal" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
