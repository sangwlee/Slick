import { connect } from 'react-redux';
import Channels from './channels';
import selector from '../../../../util/selector';
import { requestAllMessagesOfChannel } from '../../../../actions/messages_actions';

const mapStateToProps = state => {
  let channels = [];
  // debugger
  selector(state.channels).forEach( channel => {
    if (channel.kind === 'public' || channel.kind === 'private') {
      channels.push(channel);
    }
  });

  let directMessages = [];
  selector(state.channels).forEach( channel => {
    if (channel.kind === 'dm') {
      directMessages.push(channel);
    }
  });

  return {
    currentUser : state.session.currentUser,
    channels,
    directMessages,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllMessagesOfChannel: channel_id => dispatch(requestAllMessagesOfChannel(channel_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
