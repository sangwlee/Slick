import { merge } from 'lodash';
import {
  RECEIVE_ALL_REPLIES_OF_MESSAGE,
  RECEIVE_SINGLE_REPLY,
  RECEIVE_ALL_MESSAGES_OF_USER,
  RECEIVE_ALL_MESSAGES_OF_CHANNEL,
  RECEIVE_ALL_MESSAGES,
} from '../actions/messages_actions';

const defaultState = Object.freeze({
  // messages: {},
  // errors: {},
});

export const RepliesReducer = (state = defaultState, action) => {
  // debugger;
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_MESSAGES_OF_USER:
      return Object.assign({}, defaultState, action.messages.replies);
    case RECEIVE_ALL_MESSAGES_OF_CHANNEL:
    // debugger
      return Object.assign({}, defaultState, action.messages.replies);
    case RECEIVE_ALL_MESSAGES:
      return merge({}, defaultState, action.messages.replies);
    case RECEIVE_ALL_REPLIES_OF_MESSAGE:
    // debugger;
      return merge({}, defaultState, action.replies.messages);
    case RECEIVE_SINGLE_REPLY:
      return Object.assign({}, state, {[action.reply.id]: action.reply});
    default:
      return state;
  }
};
