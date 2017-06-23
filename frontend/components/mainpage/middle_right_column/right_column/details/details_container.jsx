import { connect } from 'react-redux';
import Details from './details';
import { requestAllUsersOfChannel } from '../../../../../actions/users_actions';

const mapStateToProps = state => ({
  currentChannel: state.currentChannel,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  requestAllUsersOfChannel: channel_id =>
    dispatch(requestAllUsersOfChannel(channel_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
