import {
  ADD_EXTROVERT_RESPONSE,
  ADD_INTROVERT_RESPONSE,
  CLEAR_STATE,
} from "../constants/actionTypes";

export function clearState() {
  return {
    type: CLEAR_STATE,
  };
}

export function addIntrovertResponse() {
  return {
    type: ADD_INTROVERT_RESPONSE,
  };
}

export function addExtrovertResponse() {
  return {
    type: ADD_EXTROVERT_RESPONSE,
  };
}
