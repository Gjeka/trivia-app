import React from "react";
import { connect } from "react-redux";
import { SafeAreaView } from "react-native";
import { clearState } from "../redux/actions/questions";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import Headline from "../components/Headline";
import globalStyles from "../styles/globalStyles";
import { homeStrings } from "../utilities/strings";
import HomeBody from "../components/Home/HomeBody";

const HomeScreen = (props) => {
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      props.clearState();
    }, [])
  );

  const handleBeginPress = () => {
    navigation.navigate("Quiz");
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <Headline title={homeStrings.homeHeader} />
      <HomeBody onPress={handleBeginPress} />
    </SafeAreaView>
  );
};

function mapStateToProps(state) {
  return {
    questions: state.trivia.questions,
  };
}
const mapDispatchToProps = {
  clearState,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
