import { merge } from 'lodash';
import {
  RECEIVE_ALL_CHANNELS,
  RECEIVE_SINGLE_CHANNEL,
  RECEIVE_ALL_CHANNELS_OF_USER,
  RECEIVE_CHANNEL_ERRORS,
  // RECEIVE_CURRENT_CHANNEL,
} from '../actions/channels_actions';

const defaultState = Object.freeze({
  // currentChannel: null,
});

export const ChannelsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      // debugger
      return merge({}, defaultState, action.channels);
    case RECEIVE_SINGLE_CHANNEL:
      return merge({}, defaultState, action.channels);
    case RECEIVE_ALL_CHANNELS_OF_USER:
      return merge({}, defaultState, action.channels);
    case RECEIVE_CHANNEL_ERRORS:
      return merge({}, action.errors);
    // case RECEIVE_CURRENT_CHANNEL:
    //   return merge({}, state, {currentChannel: action.channel});
    default:
      return state;
  }
};

// test
window.merge = merge;
// test
