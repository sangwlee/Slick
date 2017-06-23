import { combineReducers } from 'redux';
import { SessionReducer } from './session_reducer';
import { ChannelsReducer } from './channels_reducer';
import { UsersReducer } from './users_reducer';
import { MessagesReducer } from './messages_reducer';
import { CurrentChannelReducer } from './current_channel_reducer';

export const rootReducer = combineReducers({
  currentChannel: CurrentChannelReducer,
  session: SessionReducer,
  users: UsersReducer,
  channels: ChannelsReducer,
  messages: MessagesReducer,
});
