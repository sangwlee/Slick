import { combineReducers } from 'redux';
import { SessionReducer } from './session_reducer';
import { ChannelsReducer } from './channels_reducer';
import { UsersReducer } from './users_reducer';
import { MessagesReducer } from './messages_reducer';
import { CurrentChannelReducer } from './current_channel_reducer';
import { AllUsersReducer } from './all_users_reducer';
import { AllChannelsReducer } from './all_channels_reducer';

// import {reducer as notifications} from 'react-notification-system-redux';

export const rootReducer = combineReducers({
  session: SessionReducer,
  currentChannel: CurrentChannelReducer,
  users: UsersReducer,
  channels: ChannelsReducer,
  messages: MessagesReducer,
  allUsers: AllUsersReducer,
  allChannels: AllChannelsReducer,
  // notifications
});
