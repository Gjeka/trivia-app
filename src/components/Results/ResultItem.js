import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultItem = (props) => {
  const { text } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  correctIndicator: {
    fontSize: 32,
  },
  title: {
    width: "90%",
    fontSize: 28,
    textAlign: "center",
  },
});

export default ResultItem;
