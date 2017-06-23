import { merge } from 'lodash';
import {
  RECEIVE_USER_ERRORS,
  RECEIVE_ALL_USERS,
  RECEIVE_SINGLE_USER,
  RECEIVE_ALL_USERS_OF_CHANNEL,
} from '../actions/users_actions';

const defaultState = Object.freeze({
  // users: {},
  // errors: {}
});

export const UsersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return merge({}, defaultState, { errors: action.errors });
    case RECEIVE_ALL_USERS:
      return merge({}, defaultState, action.users);
    case RECEIVE_SINGLE_USER:
      return merge({}, defaultState, action.user);
    case RECEIVE_ALL_USERS_OF_CHANNEL:
      return merge({}, defaultState, action.users);
    default:
      return state;
  }
};