import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then( ()=> this.props.history.push('/main'));
  }

  render() {
    return (
      <div className="login-container">
        <span>Username</span>
        <span>Password</span>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange('username')} type='text'/>
          <input onChange={this.handleChange('password')} type='password'/>
          <input type="submit" value="Log In"/>
        </form>
        <ul>
          {
            this.props.errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))
          }
        </ul>
      </div>
    );
  }
};

export default withRouter(Login);
