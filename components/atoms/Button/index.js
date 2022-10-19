import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Button = (props) => {
  const { onPress, title, style = {}, disabled = false } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      disabled={disabled}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d4d4d4",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#d4d4d4",
    borderWidth: 1,
  },
});
