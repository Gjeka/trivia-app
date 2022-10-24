import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootNavigation from "./src/navigation/RootNavigation";
import store from "./src/redux/store/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
