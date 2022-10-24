import axiosMiddleware from "redux-axios-middleware";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import rootReducer from "../reducers/appReducer";
import { FAIL, SUCCESS } from "../constants/actionStatus";
import { BASE_URL } from "../../utilities/constants";

const client = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
});

const axiosMidd = axiosMiddleware(client, {
  async onSuccess({ action, dispatch, response }) {
    dispatch({ type: action.type + SUCCESS, payload: response });
    return Promise.resolve({
      type: action.type + SUCCESS,
      payload: response,
    });
  },

  async onError({ action, dispatch, error }) {
    if (!action.type.endsWith(FAIL)) {
      dispatch({ type: action.type + FAIL, payload: error.response });
      return Promise.resolve({
        type: action.type + FAIL,
        payload: error.response,
      });
    }
  },
});

const store = configureStore({
  middleware: [axiosMidd],
  reducer: rootReducer,
});

export default store;
