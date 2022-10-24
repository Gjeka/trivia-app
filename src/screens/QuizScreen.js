import React, { useState } from "react";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/globalStyles";
import {
  addExtrovertResponse,
  addIntrovertResponse,
} from "../redux/actions/questions";
import QuestionCard from "../components/Quiz/QuestionCard";
import AnswerOptions from "../components/Quiz/AnswerOptions";
import Button from "../components/Button";

const QuizScreen = (props) => {
  const navigation = useNavigation();
  const { questions, addIntrovertResponse, addExtrovertResponse } = props;
  const [index, setIndex] = useState(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

  const handleNextPress = () => {
    if (selectedAnswerIndex != null) {
      if (questions[index]?.introvertAnswers?.includes(selectedAnswerIndex)) {
        addIntrovertResponse();
      } else {
        addExtrovertResponse();
      }
      if (index == questions.length - 1) {
        navigation.replace("Results");
      } else {
        setIndex(index + 1);
        setSelectedAnswerIndex(null);
      }
    }
  };

  const handleAnswerPress = (answerIndex) => {
    setSelectedAnswerIndex(answerIndex);
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <QuestionCard title={questions[index].question} />
      <AnswerOptions
        answers={questions[index]?.possibleAnswers}
        selectedAnswerIndex={selectedAnswerIndex}
        onPress={handleAnswerPress}
      />
      <Button
        title={"Next"}
        onPress={handleNextPress}
        disabled={selectedAnswerIndex == null}
      />
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  return {
    questions: state.trivia.questions,
  };
}
const mapDispatchToProps = {
  addExtrovertResponse,
  addIntrovertResponse,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
