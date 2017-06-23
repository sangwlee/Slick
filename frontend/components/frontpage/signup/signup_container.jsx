import { connect } from 'react-redux';
import Signup from './signup';
import { signup } from '../../../actions/session_actions';
import { createSubscription } from '../../../actions/channels_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    loggedIn: Boolean(state.session.currentUser),
    login_errors: state.session.login_errors,
    signup_errors: state.session.signup_errors,
    // currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  // createSubscription: (user_id, channel_id) =>
  //   dispatch(createSubscription(user_id, channel_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
