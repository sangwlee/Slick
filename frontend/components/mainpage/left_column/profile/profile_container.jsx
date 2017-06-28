import { connect } from 'react-redux';
import Profile from './profile';
import { logout } from '../../../../actions/session_actions';
import {
  updateUser,
  requestAllUsersOfChannel,
} from '../../../../actions/users_actions';
import {
  requestAllMessagesOfChannel,
} from '../../../../actions/messages_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
    updateUser: formData => dispatch(updateUser(formData)),
  requestAllUsersOfChannel: (channel_id) =>
    dispatch((requestAllUsersOfChannel(channel_id))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
