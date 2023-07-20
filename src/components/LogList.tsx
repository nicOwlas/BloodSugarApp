import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { getLogs } from "../utils/storage";
import { LogForm } from "./LogForm";

type Log = {
  date: string;
  value: string;
};

export const LogList = () => {
  const [logs, setLogs] = useState<Log[]>([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const logsData = await getLogs();
      setLogs(logsData);
    };
    fetchLogs();
  }, [LogForm]);

  return (
    <FlatList
      data={logs}
      keyExtractor={(item) => item.date.toString()}
      renderItem={({ item }) => (
        <View style={styles.logItem}>
          <Text>{item.date}</Text>
          <Text>{item.value + " mg/dl"}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  logItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
});
