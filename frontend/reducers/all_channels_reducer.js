import { merge } from 'lodash';
import {
  RECEIVE_ALL_CHANNELS,
  RECEIVE_CHANNEL_ERRORS,
} from '../actions/channels_actions';

const defaultState = Object.freeze({
  // currentChannel: null,
});

export const AllChannelsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return merge({}, defaultState, action.channels);
    default:
      return state;
  }
};

// test
window.merge = merge;
// test
