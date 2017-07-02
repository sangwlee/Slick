import { merge } from 'lodash';
import {
  RECEIVE_ALL_REPLIES_OF_MESSAGE,
  RECEIVE_SINGLE_REPLY,
  RECEIVE_ALL_MESSAGES_OF_USER,
  RECEIVE_ALL_MESSAGES_OF_CHANNEL,
  RECEIVE_ALL_MESSAGES,
} from '../actions/messages_actions';

const defaultState = Object.freeze({
});

export const RepliesReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_MESSAGES_OF_USER:
      return Object.assign({}, defaultState, action.messages.replies);
    case RECEIVE_ALL_MESSAGES_OF_CHANNEL:
      return Object.assign({}, defaultState, action.messages.replies);
    case RECEIVE_ALL_MESSAGES:
      return merge({}, defaultState, action.messages.replies);
    case RECEIVE_ALL_REPLIES_OF_MESSAGE:
      return merge({}, defaultState, action.replies.messages);
    case RECEIVE_SINGLE_REPLY:
      return Object.assign({}, state, {[action.reply.id]: action.reply});
    default:
      return state;
  }
};
