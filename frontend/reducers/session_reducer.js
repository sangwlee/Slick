import { merge } from 'lodash';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  RECEIVE_LOGIN_ERRORS,
  RECEIVE_SIGNUP_ERRORS
} from '../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: null,
  login_errors: [],
  signup_errors: []
});

export const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    // debugger;
      return merge({}, state, { currentUser: action.currentUser });
    case RECEIVE_LOGIN_ERRORS:
      return Object.assign({}, state, { login_errors: action.errors });
    case RECEIVE_SIGNUP_ERRORS:
      return Object.assign({}, state, { signup_errors: action.errors });
    default:
      return state;
  }
};
