import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { NewLogScreen } from "./";

type HistoryStackParamList = {
  History: undefined;
  Log: undefined;
};

const Stack = createNativeStackNavigator<HistoryStackParamList>();

export function HistoryStack() {
  return (
    <Stack.Navigator initialRouteName="History">
      {/* <Stack.Screen name="History" component={HistoryScreen} /> */}
      <Stack.Screen name="Log" component={NewLogScreen} />
    </Stack.Navigator>
  );
}
