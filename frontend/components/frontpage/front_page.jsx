import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoginContainer from './login/login_container';
import SignupContainer from './signup/signup_container';
import { login } from '../../actions/session_actions';
import { connect } from 'react-redux';

class FrontPage extends React.Component{
  constructor(props) {
    super(props);

  this.guestLogin = this.guestLogin.bind(this);
  }

  guestLogin(name) {
    return () => {
      this.props.login({username: name, password: name})
      .then(()=> this.props.history.push('/main/1'));
    };
  }

  render() {
    return(
      <div className="front-page-container landing-wrapper">
        <section className="front-page-header-container">
          <h1>
            <img
              className="slicklogo"
              src={window.staticImages.slicklogo}
              alt="slick"/>
            <span className="welcome-message">
              Welcome to Slick!
            </span>
          </h1>
          <LoginContainer />
        </section>
        <section className="front-page-body-container">
          <ul className="motto">
            <li>START</li>
            <li>YOUR</li>
            <li>COMMUNICATION</li>
          </ul>
          <SignupContainer className="sign-up-container"/>
        </section>

        <button
          id='button'
          className="guest-button"
          onClick={this.guestLogin('hpotter')}>
          Login as <span className="voldemort">Harry Potter</span>
        </button>

        <button
          id='button'
          className="guest-button first-guest-button"
          onClick={this.guestLogin('voldemort')}>
          Login as <span className="voldemort">Voldemort</span>
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: userData => dispatch(login(userData))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(FrontPage)
);
