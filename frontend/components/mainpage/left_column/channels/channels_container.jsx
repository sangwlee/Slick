import { connect } from 'react-redux';
import Channels from './channels';
import selector from '../../../../util/selector';

const mapStateToProps = state => {
  let channels = [];
  selector(state.channels).forEach( channel => {
    if (channel.kind === 'public' || channel.kind === 'private') {
      channels.push(channel);
    }
  });

  return {
    currentUser : state.session.currentUser,
    channels
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
