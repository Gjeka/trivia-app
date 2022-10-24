import {
  CLEAR_STATE,
  ADD_INTROVERT_RESPONSE,
  ADD_EXTROVERT_RESPONSE,
} from "../constants/actionTypes";
import { questions } from "../../utilities/questions";
import { getRandomQuestions } from "../../utilities/helpers";

const INITIAL_STATE = {
  questions: getRandomQuestions(questions),
  introvertResponses: 0,
  extrovertResponses: 0,
};

const triviaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_INTROVERT_RESPONSE:
      console.log(JSON.stringify(action));
      return { ...state, introvertResponses: state?.introvertResponses + 1 };
    case ADD_EXTROVERT_RESPONSE:
      console.log(JSON.stringify(action));
      return { ...state, extrovertResponses: state?.extrovertResponses + 1 };
    case CLEAR_STATE:
      return { ...INITIAL_STATE, questions: getRandomQuestions(questions) };
    default:
      return state;
  }
};

export default triviaReducer;
