import React from "react";
import { connect } from "react-redux";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Headline from "../components/Headline";
import globalStyles from "../styles/globalStyles";
import { clearState } from "../redux/actions/questions";
import ResultItem from "../components/Results/ResultItem";
import { resultStrings } from "../utilities/strings";
import Button from "../components/Button";

const ResultsScreen = (props) => {
  const navigation = useNavigation();
  const { introvertResponses, extrovertResponses } = props;

  const handlePlayAgain = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
    props.clearState();
  };

  const showCorrectResult = () => {
    if (introvertResponses == extrovertResponses) {
      return resultStrings.equal;
    }
    if (introvertResponses > extrovertResponses) {
      return resultStrings.introverted;
    }
    if (introvertResponses < extrovertResponses) {
      return resultStrings.extroverted;
    }
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <ResultItem text={showCorrectResult()} />
      <Button title={resultStrings.playAgain} onPress={handlePlayAgain} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  list: {
    marginTop: 100,
  },
  playAgain: {
    padding: 20,
  },
});

function mapStateToProps(state) {
  return {
    introvertResponses: state.trivia.introvertResponses,
    extrovertResponses: state.trivia.extrovertResponses,
  };
}
const mapDispatchToProps = {
  clearState,
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen);
