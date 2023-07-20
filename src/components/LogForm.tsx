import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { RootStackParamList } from "../types";
import { saveLog } from "../utils/storage";

type LogFormNavigationProp = StackNavigationProp<RootStackParamList, "Log">;

export function LogForm() {
  const navigation = useNavigation<LogFormNavigationProp>();
  const [value, setValue] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await saveLog(value);
    setIsSubmitting(false);
    navigation.navigate("TabNavigator", {
      screen: "Home",
      params: { newLog: value },
    });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter blood sugar level"
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
      />
      <Button
        title={isSubmitting ? "Saving..." : "Submit"}
        onPress={handleSubmit}
      />
    </View>
  );
}
