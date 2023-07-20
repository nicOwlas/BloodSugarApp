import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getLogs } from "../utils/storage";

interface Log {
  date: string;
  value: string;
}

export function HistoryScreen() {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    loadLogs();
  }, []);

  const loadLogs = async () => {
    const data = await getLogs();
    setLogs(data);
  };

  return (
    <View>
      <FlatList
        data={logs}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <Text>{item.date}</Text>
            <Text>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}
