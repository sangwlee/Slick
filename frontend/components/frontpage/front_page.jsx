import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LoginContainer from './login/login_container';
import SignupContainer from './signup/signup_container';

class FrontPage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="front-page-container landing-wrapper">
        <section className="front-page-header-container">
          <h1>
            <img className="slicklogo" src="assets/slicklogo.img" alt="slick"/>
            <span className="welcome-message">Welcome to Slick!</span>
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
      </div>
    );
  }
}

export default withRouter(FrontPage);
