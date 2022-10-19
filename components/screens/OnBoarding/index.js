import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { Button } from "../../atoms/Button";

export const OnBoarding = () => {
  return (
    <View style={styles.container}>
      {/* <View> */}
      <Image
        style={styles.tinyLogo}
        source={require("../../../assets/royalEnfield.png")}
        resizeMode="contain"
      />
      {/* <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      /> */}
      {/* </View> */}
      <Button title="Select city" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // backgroundColor: "lightgrey",
  },
  tinyLogo: {
    width: 330,
    height: 330,
  },
});
