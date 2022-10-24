import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import checkboxSelected from "../../assets/checkboxSelected.png";
import checkboxNotSelected from "../../assets/checkboxNotSelected.png";
import colors from "../../utilities/colors";
import { paragraphTextStyle } from "../../utilities/typography";

const AnswerOptions = (props) => {
  const { answers, onPress, selectedAnswerIndex } = props;

  const handleAnswerPress = (index) => {
    onPress && onPress(index);
  };

  return (
    <View style={styles.container}>
      {answers.map((answer, index) => (
        <TouchableOpacity
          key={index}
          style={styles.buttons(selectedAnswerIndex == index)}
          onPress={() => handleAnswerPress(index)}
        >
          <Image
            source={
              selectedAnswerIndex == index
                ? checkboxSelected
                : checkboxNotSelected
            }
            style={styles.checkbox}
          />
          <Text style={styles.textStyle(selectedAnswerIndex == index)}>
            {answer}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
  },
  buttons: (isSelected) => ({
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    width: "90%",
    marginVertical: 10,
    borderColor: isSelected ? colors.blue300 : colors.gray200,
    backgroundColor: isSelected ? colors.blue300 : null,
  }),
  textStyle: (isSelected) => ({
    ...paragraphTextStyle,
    color: isSelected ? colors.neutral0 : colors.gray900,
    width: "90%",
  }),
  checkbox: {
    width: 18,
    height: 18,
    marginRight: 10,
  },
});

export default AnswerOptions;
