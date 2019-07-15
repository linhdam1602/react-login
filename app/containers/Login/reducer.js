/*
 *
 * Login reducer
 *
 */
import produce from "immer";
import { LOGIN_ACTION } from "./constants";

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOGIN_ACTION:
        return state;
    }
  });

export default loginReducer;
