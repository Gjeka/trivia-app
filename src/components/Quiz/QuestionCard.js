import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import colors from "../../utilities/colors";

const QuestionCard = (props) => {
  const { title } = props;
  return (
    <View style={{ ...styles.container, ...styles.shadow }}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    height: "30%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.neutral0,
    borderRadius: 15,
    padding: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
  },
  shadow: {
    shadowOffset: { width: 10, height: 10 },
    shadowColor: colors.gray50,
    shadowOpacity: 1,
    elevation: 3,
  },
});

export default QuestionCard;
