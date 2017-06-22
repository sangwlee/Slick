import { combineReducers } from 'redux';
import { SessionReducer } from './session_reducer';
// import { ChannelsReducer } from './channels_reducer';
// import { UsersReducer } from './users_reducer';
// import { MessagesReducer } from './messages_reducer';

export const rootReducer = combineReducers({
  session: SessionReducer,
  // channels: ChannelsReducer,
  // users: UsersReducer,
  // messages: MessagesReducer,
  currentChannel: null,
  currentUser: null,
});
