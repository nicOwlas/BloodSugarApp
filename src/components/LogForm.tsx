import React, { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { saveLog } from "../utils/storage";

export function LogForm() {
  const [value, setValue] = useState<string>("");

  const handleSubmit = async () => {
    await saveLog(value);
    setValue("");
  };

  return (
    <View>
      <TextInput
        placeholder="Enter blood sugar level"
        value={value}
        onChangeText={setValue}
        keyboardType="numeric"
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
