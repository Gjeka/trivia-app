import HomeScreen from "../screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import QuizScreen from "../screens/QuizScreen";
import ResultsScreen from "../screens/ResultsScreen";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="Quiz"
        options={{ headerShown: false }}
        component={QuizScreen}
      />
      <Stack.Screen
        name="Results"
        options={{ headerShown: false }}
        component={ResultsScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
