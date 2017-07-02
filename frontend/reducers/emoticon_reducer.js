import {
  RECEIVE_ALL_EMOTICONS,
  RECEIVE_SINGLE_EMOTICON,
} from '../actions/emoticon_actions';
import { merge } from 'lodash';

const defaultState = {

};

export const EmotionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEOVE_ALL_EMOTICONS:
      return action.emoticons;
    case RECEIVE_SINGLE_EMOTICON:
      return merge({}, state, action.emoticon);
    default:
      return state;
  }
};
