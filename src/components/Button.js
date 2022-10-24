import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../utilities/colors";

const Button = (props) => {
  const { title, style, onPress, disabled } = props;
  return (
    <TouchableOpacity
      style={[styles.container(disabled), style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: (isDisabled) => ({
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 20,
    backgroundColor: isDisabled ? colors.gray100 : colors.blue400,
  }),
  title: {
    color: colors.neutral0,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Button;
