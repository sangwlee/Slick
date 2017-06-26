import { merge } from 'lodash';
import {
  RECEIVE_ALL_CHANNELS,
  RECEIVE_SINGLE_CHANNEL,
  RECEIVE_ALL_CHANNELS_OF_USER,
  RECEIVE_CHANNEL_ERRORS,
  // RECEIVE_CURRENT_CHANNEL,
} from '../actions/channels_actions';

const defaultState = Object.freeze({
  errors: []
});

export const ChannelsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SINGLE_CHANNEL:
      return merge({}, defaultState, action.channels);
    case RECEIVE_ALL_CHANNELS_OF_USER:
      return merge({}, defaultState, action.channels);
    case RECEIVE_CHANNEL_ERRORS:
      // debugger
      return merge({}, {errors: []}, {errors: action.errors});
    default:
      return state;
  }
};

// test
window.merge = merge;
// test
