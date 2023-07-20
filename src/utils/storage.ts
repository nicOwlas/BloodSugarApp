import AsyncStorage from "@react-native-async-storage/async-storage";

interface Log {
  date: string;
  value: string;
}

export async function saveLog(value: string) {
  const date = new Date().toISOString();
  const log: Log = { date, value };

  const logs = JSON.parse(await AsyncStorage.getItem("logs")) || [];
  logs.push(log);

  await AsyncStorage.setItem("logs", JSON.stringify(logs));
}

export async function getLogs() {
  const logs: Log[] = JSON.parse(await AsyncStorage.getItem("logs")) || [];
  return logs;
}
