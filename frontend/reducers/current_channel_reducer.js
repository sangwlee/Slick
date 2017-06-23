import { merge } from 'lodash';
import {
  RECEIVE_CURRENT_CHANNEL,
} from '../actions/channels_actions';

const defaultState = Object.freeze({
  // currentChannel: null,
});

export const CurrentChannelReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_CHANNEL:
      return merge({}, state, action.channel);
    default:
      return state;
  }
};

// test
window.merge = merge;
// test
