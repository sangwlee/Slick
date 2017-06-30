import { merge } from 'lodash';
import {
  RECEIVE_ALL_REPLIES_OF_MESSAGE,
  RECEIVE_SINGLE_REPLY,
} from '../actions/messages_actions';

const defaultState = Object.freeze({
  // messages: {},
  // errors: {},
});

export const RepliesReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_REPLIES_OF_MESSAGE:
      return merge({}, defaultState, action.replies);
    case RECEIVE_SINGLE_REPLY:
      return Object.assign({}, state, {[action.reply.id]: action.reply});
    default:
      return state;
  }
};
