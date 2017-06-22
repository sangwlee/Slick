import { combineReducers } from 'redux';
import { SessionReducer } from './session_reducer';
import { ChannelsReducer } from './channels_reducer';
import { UsersReducer } from './users_reducer';
import { MessagesReducer } from './messages_reducer';

export const rootReducer = combineReducers({
  currentUser: '',
  currentChannel: '',
  session: SessionReducer,
  users: UsersReducer,
  channels: ChannelsReducer,
  messages: MessagesReducer,
});
