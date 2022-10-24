import { combineReducers } from "redux";
import triviaReducer from "./triviaReducer";

const appReducer = combineReducers({
  trivia: triviaReducer,
});

const rootReducer = (state = {}, action) => {
  return appReducer(state, action);
};

export default rootReducer;
