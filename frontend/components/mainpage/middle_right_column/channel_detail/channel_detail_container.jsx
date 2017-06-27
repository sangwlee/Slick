import { connect } from 'react-redux';
import ChannelDetail from './channel_detail';
import {
  requestCurrentChannel,
  createSubscription,
} from '../../../../actions/channels_actions';
import { requestAllUsersOfChannel } from '../../../../actions/users_actions';
import selector from '../../../../util/selector';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentChannel: state.currentChannel,
  users: state.users,
  allUsers: selector(state.allUsers),
});

const mapDispatchToProps = dispatch => ({
  requestCurrentChannel: channel_id => dispatch(requestCurrentChannel(channel_id)),
  requestAllUsersOfChannel: channel_id => dispatch(requestAllUsersOfChannel(channel_id)),
  createSubscription: (user_id, channel_id) => dispatch(createSubscription(user_id, channel_id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail);
