import { merge } from 'lodash';
import {
  RECEIVE_ALL_CHANNELS,
  RECEIVE_SINGLE_CHANNEL,
  RECEIVE_ALL_CHANNELS_OF_USER,
  RECEIVE_CHANNEL_ERRORS,
} from '../actions/channels_actions';

const defaultState = Object.freeze({
  // channels: {
  //   currentChannel: null
  // },
  // errors: {}
});

export const ChannelsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return merge({}, defaultState, action.channels);
    case RECEIVE_SINGLE_CHANNEL:
      return merge({}, defaultState, action.channel);
    case RECEIVE_ALL_CHANNELS_OF_USER:
      return merge({}, defaultState, action.channels);
    case RECEIVE_CHANNEL_ERRORS:
      return Object.assign({}, action.errors);
    default:
      return state;
  }
};

// test
window.merge = merge;
// test
