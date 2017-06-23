import { connect } from 'react-redux';
import DirectMessages from './direct_messages';
import selector from '../../../../util/selector';

const mapStateToProps = state => {
  let directMessages = [];
  selector(state.channels).forEach( channel => {
    if (channel.kind === 'dm') {
      directMessages.push(channel);
    }
  });

  return {
    currentUser : state.session.currentUser,
    directMessages
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessages);
