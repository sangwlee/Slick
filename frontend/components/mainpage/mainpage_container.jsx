import { connect } from 'react-redux';
import MainPage from './mainpage';
import {
  requestAllChannelsOfUser,
  createSubscription,
} from '../../actions/channels_actions';


const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllChannelsOfUser: user_id =>
      dispatch(requestAllChannelsOfUser(user_id)),
    createSubscription: (user_id, channel_id) =>
      dispatch(createSubscription(user_id, channel_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
