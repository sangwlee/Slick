import { merge } from 'lodash';
import {
  RECEIVE_ALL_MESSAGES,
  RECEIVE_SINGLE_MESSAGE,
  RECEIVE_ALL_MESSAGES_OF_USER,
  RECEIVE_MESSAGE_ERRORS,
} from '../actions/messages_actions';

const defaultState = Object.freeze({
  messages: {},
  errors: {},
});

export const MessagesReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_MESSAGES:
      return merge({}, state, { messages: action.messages });
    case RECEIVE_SINGLE_MESSAGE:
      return Object.assign({}, state, { messages: action.message });
    case RECEIVE_ALL_MESSAGES_OF_USER:
      return Object.assign({}, state, { messages: action.messages });
    case RECEIVE_MESSAGE_ERRORS:
      return Object.assign({}, state, { errors: action.errors });
    default:
      return state;
  }
};
