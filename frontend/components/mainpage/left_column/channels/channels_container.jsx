import { connect } from 'react-redux';
import Channels from './channels';
import selector from '../../../../util/selector';
import { withRouter } from 'react-router-dom';
import {
  requestAllMessagesOfChannel
} from '../../../../actions/messages_actions';
import {
  requestAllUsersOfChannel
} from '../../../../actions/users_actions';
import {
  updateChannel,
  requestAllChannelsOfUser,
} from '../../../../actions/channels_actions';

const mapStateToProps = state => {
  let channels = [];
  // debugger
  selector(state.channels).forEach( channel => {
    if (channel.kind === 'public' || channel.kind === 'private') {
      channels.unshift(channel);
    }
  });

  let directMessages = [];
  selector(state.channels).forEach( channel => {
    if (channel.kind === 'dm') {
      directMessages.unshift(channel);
    }
  });

  // debugger

  return {
    currentUser : state.session.currentUser,
    channels,
    directMessages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllUsersOfChannel: channel_id =>
      dispatch(requestAllUsersOfChannel(channel_id)),
    requestAllMessagesOfChannel: channel_id =>
      dispatch(requestAllMessagesOfChannel(channel_id)),
    updateChannel: (channel_id, channelData) =>
      dispatch(updateChannel(channel_id, channelData)),
    requestAllChannelsOfUser: user_id =>
      dispatch(requestAllChannelsOfUser(user_id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels));
