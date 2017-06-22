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
      channels: {},
      users: {},
      messages: {},
      currentChannel: null,
      currentUser: window.currentUser,
    };
    store = configureStore(preloadedState);
    // delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});

// combineReducers({
//   session: SessionReducer,
//   channels: ChannelsReducer,
//   users: UsersReducer,
//   messages: MessagesReducer,
//   currentChannel: null,
//   currentUser: null,
// });
