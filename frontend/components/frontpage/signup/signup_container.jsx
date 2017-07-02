import { connect } from 'react-redux';
import Signup from './signup';
import { signup } from '../../../actions/session_actions';
import { createSubscription } from '../../../actions/channels_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    login_errors: state.session.login_errors,
    signup_errors: state.session.signup_errors,
  };
};

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
