import { connect } from 'react-redux';
import ChannelDetail from './channel_detail';
import { requestCurrentChannel } from '../../../../actions/channels_actions';

const mapStateToProps = state => ({
  currentChannel: state.currentChannel,
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  requestCurrentChannel: channel_id => dispatch(requestCurrentChannel(channel_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail);
