import { connect } from 'react-redux';
import Messages from './messages';
import { requestAllMessagesOfChannel } from '../../../../actions/messages_actions';
import { requestAllUsersOfChannel } from '../../../../actions/users_actions';


const mapStateToProps = state => {
  return {
    messages: state.messages,
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
