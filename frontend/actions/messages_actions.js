import * as MessagesUtil from '../util/messages_util';

export const RECEIVE_ALL_MESSAGES = "RECEIVE_ALL_MESSAGES";
export const RECEIVE_SINGLE_MESSAGE = "RECEIVE_SINGLE_MESSAGE";
export const RECEIVE_ALL_MESSAGES_OF_USER = "RECEIVE_ALL_MESSAGES_OF_USER";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const RECEIVE_ALL_MESSAGES_OF_CHANNEL = "RECEIVE_ALL_MESSAGES_OF_CHANNEL";
export const RECEIVE_ALL_REPLIES_OF_MESSAGE = "RECEIVE_ALL_REPLIES_OF_MESSAGE";
export const RECEIVE_SINGLE_REPLY = "RECEIVE_SINGLE_REPLY";

// REGULAR ACTIONS
export const receiveMessageErrors = errors => {
  return {
    type: RECEIVE_MESSAGE_ERRORS,
    errors
  };
};

export const receiveAllMessages = messages => {
  return {
    type: RECEIVE_ALL_MESSAGES,
    messages
  };
};

export const receiveAllRepliesOfMessage = replies => {
  return {
    type: RECEIVE_ALL_REPLIES_OF_MESSAGE,
    replies
  };
};

export const receiveSingleMessage = message => {
  return {
    type: RECEIVE_SINGLE_MESSAGE,
    message
  };
};

export const receiveSingleReply = reply => {
  return {
    type: RECEIVE_SINGLE_REPLY,
    reply
  };
};

export const receiveAllMessagesOfUser = messages => {
  return {
    type: RECEIVE_ALL_MESSAGES_OF_USER,
    messages
  };
};

export const receiveAllMessagesOfChannel = messages => {
  return {
    type: RECEIVE_ALL_MESSAGES_OF_CHANNEL,
    messages
  };
};

// THUNK ACTION CREATOR
export const requestAllMessages = () => dispatch => {
  return MessagesUtil.fetchAllMessages()
    .then(messages => dispatch(receiveAllMessages(messages)))
    .fail(err => dispatch(receiveMessageErrors(err.responseJSON)));
};

export const requestSingleMessage = message_id => dispatch => {
  return MessagesUtil.fetchSingleMessage(message_id)
    .then(message => dispatch(receiveSingleMessage(message)))
    .fail(err => dispatch(receiveMessageErrors(err.responseJSON)));
};

export const requestAllMessagesOfUser = user_id => dispatch => {
  return MessagesUtil.fetchAllMessagesOfUser(user_id)
    .then(messages => dispatch(receiveAllMessagesOfUser(messages)))
    .fail(err => dispatch(receiveMessageErrors(err.responseJSON)));
};

export const requestAllRepliesOfMessage = message_id => dispatch => {
  return MessagesUtil.fetchAllRepliesOfMessage(message_id)
    .then(replies => dispatch(receiveAllRepliesOfMessage(replies)));
};

export const requestAllMessagesOfChannel = channel_id => dispatch => {
  return MessagesUtil.fetchAllMessagesOfChannel(channel_id)
    .then(messages => dispatch(receiveAllMessagesOfChannel(messages)))
    .fail(err => dispatch(receiveMessageErrors(err.responseJSON)));
};

export const createMessage = messageData => dispatch => {
  return MessagesUtil.createMessage(messageData)
    .then(message => dispatch(receiveSingleMessage(message)))
    .fail(err => dispatch(receiveMessageErrors(err.responseJSON)));
};

export const createReply = replyData => dispatch => {
  return MessagesUtil.createMessage(replyData);
};

export const updateMessage = (messageId, messageData) => dispatch => {
  return MessagesUtil.updateMessage(messageId, messageData);
};

export const deleteMessage = message_id => dispatch => {
  return MessagesUtil.deleteMessage(message_id)
    .fail(err => dispatch(receiveMessageErrors(err.responseJSON)));
};
