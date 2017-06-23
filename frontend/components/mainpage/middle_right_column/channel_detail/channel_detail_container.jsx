import { connect } from 'react-redux';
import ChannelDetail from './channel_detail';
import { requestSingleChannel } from '../../../../actions/channels_actions';

const mapStateToProps = state => ({
  currentChannel: state.channels
});

const mapDispatchToProps = dispatch => ({
  requestSingleChannel: channel_id => dispatch(requestSingleChannel(channel_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail);
