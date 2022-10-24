import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { homeStrings } from "../../utilities/strings";
import Button from "../Button";

const HomeBody = (props) => {
  const { onPress } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{homeStrings.homeTitle}</Text>
      <Text style={styles.text}>{homeStrings.homeQuestion}</Text>
      <Button title={homeStrings.buttonText} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  text: {
    marginVertical: 20,
    fontSize: 22,
    textAlign: "center",
  },
});

export default HomeBody;
