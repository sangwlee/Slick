
import { merge } from 'lodash';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';

const defaultState = Object.freeze({
  currentUser: null,
  errors: []
});

export const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { currentUser: action.currentUser });
    case RECEIVE_ERRORS:
    // debugger
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};
