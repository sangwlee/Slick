import { connect } from 'react-redux';
import Messages from './messages';
import { requestAllMessagesOfChannel } from '../../../../actions/messages_actions';

const mapStateToProps = state => {
  return {
    messages: state.messages,
    allUsers: state.allUsers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllMessagesOfChannel: channel_id => dispatch(requestAllMessagesOfChannel(channel_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
