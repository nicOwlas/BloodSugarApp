import AsyncStorage from "@react-native-async-storage/async-storage";

interface Log {
  date: string;
  value: string;
}

export async function saveLog(value: string) {
  const date = new Date().toISOString();
  const log: Log = { date, value };

  const existingLogs = await AsyncStorage.getItem("logs");
  const logs = existingLogs ? JSON.parse(existingLogs) : [];
  logs.unshift(log);

  await AsyncStorage.setItem("logs", JSON.stringify(logs));
}

export async function getLogs() {
  const existingLogs = await AsyncStorage.getItem("logs");
  const logs: Log[] = existingLogs ? JSON.parse(existingLogs) : [];
  return logs;
}
