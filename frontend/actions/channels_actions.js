import * as ChannelsUtil from '../util/channels_util';

export const RECEIVE_ALL_CHANNELS = "RECEIVE_ALL_CHANNELS";
export const RECEIVE_SINGLE_CHANNEL = "RECEIVE_SINGLE_CHANNEL";
export const RECEIVE_ALL_CHANNELS_OF_USER = "RECEIVE_ALL_CHANNELS_OF_USER";
export const RECEIVE_CHANNEL_ERRORS = "RECEIVE_CHANNEL_ERRORS";
export const RECEIVE_CURRENT_CHANNEL = "RECEIVE_CURRENT_CHANNEL";

// REGULAR ACTIONS
export const receiveChannelErrors = errors => {
  return {
    type: RECEIVE_CHANNEL_ERRORS,
    errors
  };
};

export const receiveAllChannels = channels => {
  return {
    type: RECEIVE_ALL_CHANNELS,
    channels
  };
};

export const receiveSingleChannel = channel => {
  return {
    type: RECEIVE_SINGLE_CHANNEL,
    channel
  };
};
export const receiveAllChannelsOfUser = channels => {
  // debugger
  return {
    type: RECEIVE_ALL_CHANNELS_OF_USER,
    channels
  };
};

export const receiveCurrentChannel = channel => {
  return {
    type: RECEIVE_CURRENT_CHANNEL,
    channel
  };
};

// THUNK ACTION CREATOR
export const requestCurrentChannel = channel_id => dispatch => {
  return ChannelsUtil.fetchSingleChannel(channel_id)
    .then(channel => dispatch(receiveCurrentChannel(channel)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};

export const requestAllChannels = () => dispatch => {
  return ChannelsUtil.fetchAllChannels()
    .then(channels => dispatch(receiveAllChannels(channels)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};

export const requestSingleChannel = channel_id => dispatch => {
  return ChannelsUtil.fetchSingleChannel(channel_id)
    .then(channel => dispatch(receiveSingleChannel(channel)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};

export const requestAllChannelsOfUser = user_id => dispatch => {
  return ChannelsUtil.fetchAllChannelsOfUser(user_id)
    .then(channels => dispatch(receiveAllChannelsOfUser(channels)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};

export const createChannel = channelData => dispatch => {
  return ChannelsUtil.createChannel(channelData)
    .then(channel => dispatch(receiveSingleChannel(channel)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};

export const updateChannel = (channelId, channelData) => dispatch => {
  return ChannelsUtil.updateChannel(channelId, channelData)
    .then(channel => dispatch(receiveSingleChannel(channel)))
    .fail(err => dispatch(receiveChannelErrors(err.responseJSON)));
};

export const deleteChannel = channel_id => dispatch => {
  return ChannelsUtil.deleteChannel(channel_id)
    .fail(err => {
      // debugger
      return dispatch(receiveChannelErrors(err.responseJSON));
    });
};

// Subscription actions
export const createSubscription = subscriptionData => dispatch => {
  return ChannelsUtil.createSubscription(subscriptionData);
};

export const deleteSubscription = subscription_id => dispatch => {
  return ChannelsUtil.deleteSubscription(subscription_id);
};
