import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from './components/root';
import * as APIUtil from './util/session_api_util';
import { configureStore } from './store/store';
import {
  login
} from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser, login_errors: [], signup_errors: [] },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //test
  // window.store = store;
  //test

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

// test User Util
// import * as UsersUtil from './util/users_util'
// window.fetchAllUsers = UsersUtil.fetchAllUsers;
// window.fetchAllUsersOfChannel = UsersUtil.fetchAllUsersOfChannel;
// window.createUser = UsersUtil.createUser;
// window.updateUser = UsersUtil.updateUser;
// window.deleteUser = UsersUtil.deleteUser;

// test Message Util
// import * as MessagesUtil from './util/messages_util'
// window.fetchAllMessages = MessagesUtil.fetchAllMessages;
// window.fetchAllMessagesOfChannel = MessagesUtil.fetchAllMessagesOfChannel;
// window.fetchAllMessagesOfUser = MessagesUtil.fetchAllMessagesOfUser;
// window.createMessage = MessagesUtil.createMessage;
// window.updateMessage = MessagesUtil.updateMessage;
// window.deleteMessage = MessagesUtil.deleteMessage;

// test Channel Util
// import * as ChannelsUtil from './util/channels_util'
// window.fetchAllChannels = ChannelsUtil.fetchAllChannels;
// window.fetchSingleChannel = ChannelsUtil.fetchSingleChannel;
// window.fetchAllChannelsOfUser = ChannelsUtil.fetchAllChannelsOfUser;
// window.createChannel = ChannelsUtil.createChannel;
// window.updateChannel = ChannelsUtil.updateChannel;
// window.deleteChannel = ChannelsUtil.deleteChannel;

// test User Actions
// import {
//   requestAllUsers,
//   requestSingleUser,
//   requestAllUsersOfChannel,
//   createUser,
//   updateUser,
//   deleteUser
// } from './actions/users_actions'
// window.requestAllUsersOfChannel = requestAllUsersOfChannel;
// window.createl = receiveAllUsersOfChannel;
//test

// test Channel Actions
// import {
//   requestAllChannels,
//   requestSingleChannel,
//   requestAllChannelsOfUser,
//   createChannel,
//   updateChannel,
//   deleteChannel,
//   createSubscription,
//   deleteSubscription
// } from './actions/channels_actions'
// window.requestAllChannels = requestAllChannels;
// window.requestSingleChannel = requestSingleChannel;
// window.requestAllChannelsOfUser = requestAllChannelsOfUser;
// window.createChannel = createChannel;
// window.updateChannel = updateChannel;
// window.deleteChannel = deleteChannel;
// window.createSubscription = createSubscription;
// window.deleteSubscription = deleteSubscription;

// test Message actions
// import {
//   requestAllMessages,
//   requestSingleMessage,
//   requestAllMessagesOfUser,
//   createMessage,
//   updateMessage,
//   deleteMessage
// } from './actions/messages_actions'
// window.requestAllMessages = requestAllMessages;
// window.requestSingleMessage = requestSingleMessage;
// window.requestAllMessagesOfUser = requestAllMessagesOfUser;
// window.createMessage = createMessage;
// window.updateMessage = updateMessage;
// window.deleteMessage = deleteMessage;
