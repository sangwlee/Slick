import { connect } from 'react-redux';
import MainPage from './mainpage';
import {
  requestAllChannelsOfUser,
} from '../../actions/channels_actions';
import {
  requestAllUsersOfChannel,
} from '../../actions/users_actions';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    // currentChannel: state.currentChannel
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllChannelsOfUser: user_id =>
      dispatch(requestAllChannelsOfUser(user_id)),
    // requestAllUsersOfChannel: channel_id =>
    //   dispatch(requestAllUsersOfChannel(channel_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
