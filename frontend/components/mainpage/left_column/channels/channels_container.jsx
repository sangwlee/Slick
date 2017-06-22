import { connect } from 'react-redux';
import Channels from './channels';
import { requestAllChannelsOfUser } from '../../../../actions/channels_actions';

const mapStateToProps = state => {
  debugger
  return {
    currentUser : state.session.currentUser,
    channels: state.channels.channels || []
  };
};

const mapDispatchToProps = dispatch => {
  // debugger
  return {
    requestAllChannelsOfUser: user_id => dispatch(requestAllChannelsOfUser(user_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
