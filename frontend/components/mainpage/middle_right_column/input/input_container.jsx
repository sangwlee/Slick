import { connect } from 'react-redux';
import Input from './input';
import { createMessage } from '../../../../actions/messages_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  currentChannel: state.currentChannel ? state.currentChanenl : {name: ''},
});

const mapDispatchToProps = dispatch => ({
  createMessage: messageData => dispatch(createMessage(messageData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
