import * as EmoticonUtil from '../util/emoticon_util';

export const RECEIVE_ALL_EMOTICONS_OF_CHANNEL = 'RECEIVE_ALL_EMOTICONS_OF_CHANNEL';
export  const RECEIVE_SINGLE_EMOTICON = "RECEIVE_SINGLE_EMOTICON";

export const receiveAllEmoticonsOfChannel = emoticons => {
  return {
    type: RECEIVE_ALL_EMOTICONS_OF_CHANNEL,
    emoticons
  };
};

export const receiveSingleEmoticon = emoticon => {
  return {
    type: RECEIVE_SINGLE_EMOTICON,
    emoticon
  };
};

export const requestAllEmoticonsOfChannel = channel_id => dispatch => {
  return EmoticonUtil.fetchAllEmoticonsOfChannel(channel_id)
    .then(emoticons => dispatch(receiveAllEmoticonsOfChannel(emoticons)));
};

export const createEmoticon = emoticonData => dispatch => {
  return EmoticonUtil.createEmoticon(emoticonData)
    .then(emoticon => dispatch(receiveSingleEmoticon(emoticon)));
};

export const destroyEmoticon = emoticon_id => dispatch => {
  return EmoticonUtil.deleteEmoticon(emoticon_id);
};
