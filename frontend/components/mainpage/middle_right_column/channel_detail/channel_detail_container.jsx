import { connect } from 'react-redux';
import ChannelDetail from './channel_detail';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail);
