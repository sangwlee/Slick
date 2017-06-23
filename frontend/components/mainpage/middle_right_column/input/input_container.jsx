import { connect } from 'react-redux';
import Input from './input';
import { createMessage } from '../../../../actions/messages_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  createMessage: messageData => dispatch(createMessage(messageData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
