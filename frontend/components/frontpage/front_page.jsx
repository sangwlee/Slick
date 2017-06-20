import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from './login/login_container';
import SignupContainer from './signup/signup_container';

class FrontPage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="front-page-container">
        <section className="front-page-header-container">
          <h1><img className="slicklogo" src="assets/slicklogo.img" alt="slick"/>Slick</h1>
          <LoginContainer />
        </section>
        <section className="front-page-body-container">
          <ul>
            <li>start</li>
            <li>COMMUNICATING</li>
            <li>today</li>
          </ul>
          <SignupContainer className="sign-up-container"/>
        </section>
      </div>
    );
  }
}

export default FrontPage;
