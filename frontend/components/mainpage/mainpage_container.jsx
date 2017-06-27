import { connect } from 'react-redux';
import MainPage from './mainpage';
import {
  requestAllChannels,
  requestAllChannelsOfUser,
  requestCurrentChannel,
} from '../../actions/channels_actions';
import {
  requestAllUsers,
  requestAllUsersOfChannel,
} from '../../actions/users_actions';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllChannelsOfUser: user_id =>
      dispatch(requestAllChannelsOfUser(user_id)),
    requestAllChannels: () =>
      dispatch(requestAllChannels()),
    requestAllUsers: () =>
      dispatch(requestAllUsers()),
    requestCurrentChannel: channel_id =>
      dispatch(requestCurrentChannel(channel_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
