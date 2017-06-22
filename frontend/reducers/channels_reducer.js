import { merge } from 'lodash';
import {
  RECEIVE_ALL_CHANNELS,
  RECEIVE_SINGLE_CHANNEL,
  RECEIVE_ALL_CHANNELS_OF_USER,
  RECEIVE_CHANNEL_ERRORS,
} from '../actions/channels_actions';

const defaultState = Object.freeze({
  channels: [],
  errors: []
});

export const ChannelsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return merge({}, state, { channels: action.channels });
    case RECEIVE_SINGLE_CHANNEL:
      return merge({}, state, { channels: action.channel });
    case RECEIVE_ALL_CHANNELS_OF_USER:
      // debugger
      return merge({}, state, { channels: action.channels });
    case RECEIVE_CHANNEL_ERRORS:
      return Object.assign({}, {errors: action.errors});
    default:
      return state;
  }
};

// test
window.merge = merge;
// test
