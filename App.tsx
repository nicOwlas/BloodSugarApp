import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Icon } from "react-native-elements";
import { HistoryScreen, LogScreen, SettingsScreen } from "./src/screens";

type TabNavigatorParams = {
  Log: undefined;
  History: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParams>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Log"
          component={LogScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="add" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="history" color={color} size={size} />
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
    </NavigationContainer>
  );
}
