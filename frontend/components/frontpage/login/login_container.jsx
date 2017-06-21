import { connect } from 'react-redux';
import Login from './login';
import { login } from '../../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  login_errors: state.session.login_errors,
  signup_errors: state.session.signup_errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
