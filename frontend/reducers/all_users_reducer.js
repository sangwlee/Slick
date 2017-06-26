import { merge } from 'lodash';
import {
  RECEIVE_ALL_USERS,
} from '../actions/users_actions';

const defaultState = Object.freeze({
});

export const AllUsersReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_USERS:
      return action.users;
    default:
      return state;
  }
};
