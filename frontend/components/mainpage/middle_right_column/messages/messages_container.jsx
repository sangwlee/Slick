import { connect } from 'react-redux';
import Messages from './messages';
import { requestAllMessagesOfChannel } from '../../../../actions/messages_actions';
import { requestAllUsersOfChannel } from '../../../../actions/users_actions';
import selector from '../../../../util/selector';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    messages: selector(state.messages),
    allUsers: state.allUsers,
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllMessagesOfChannel: channel_id => dispatch(requestAllMessagesOfChannel(channel_id)),
    requestAllUsersOfChannel: channel_id => dispatch(requestAllUsersOfChannel(channel_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
