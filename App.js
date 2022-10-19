import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { OnBoarding } from "./components/screens/OnBoarding";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Royal Brothers App OnBoarding Screen</Text>
      {/* <StatusBar style="auto" /> */}
      <OnBoarding />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
