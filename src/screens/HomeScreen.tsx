import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { FAB } from "react-native-elements";
import { LogList } from "../components/LogList";

export const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <LogList />

      <FAB
        title="Add"
        placement="right"
        onPress={() => navigation.navigate("NewLog")}
      />
    </View>
  );
};

export default HomeScreen;
