import { merge } from 'lodash';
import {

} from '../actions/messages_actions';

const defaultState = Object.freeze({});

export const MessagesReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser });
    case RECEIVE_LOGIN_ERRORS:
      return Object.assign({}, state, { login_errors: action.errors });
    case RECEIVE_SIGNUP_ERRORS:
      return Object.assign({}, state, { signup_errors: action.errors });
    default:
      return state;
  }
};
