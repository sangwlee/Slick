import React from 'react';
import { withRouter } from 'react-router';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', email: '', firstname: 'First', lastname: 'Last'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.empty = this.empty.bind(this);
  }

  empty(type) {
    // debugger
    return (e) => {
      if (e.currentTarget.value !== 'First' || e.currentTarget.value !== 'Last') {
        this.setState({[type]: ''});
      }
    };
  }

  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(() => this.props.history.push('/main'));
  }

  render() {
    return(
      <div className="signup-container">
        <h3>First Time?</h3>
        <form onSubmit={this.handleSubmit}>
          <label><span className="shift-your-name">Your name</span>
            <input onClick={this.empty('firstname')} onChange={this.handleChange('firstname')} type='text' value={this.state.firstname}/>
            <input onClick={this.empty('lastname')} onChange={this.handleChange('lastname')} type='text' value={this.state.lastname}/>
          </label>

          <br/>

          <label><span className="shift-username">Username</span>
            <input className="longerInput" onChange={this.handleChange('username')} type='text'/>
          </label>

          <div><hr /></div>

          <label><span className="shift-email">Email</span>
            <input className="longerInput" onChange={this.handleChange('email')} type='text'/>
          </label>

          <br />

          <label><span className="shift-password">Password</span>
            <input className="longerInput" onChange={this.handleChange('password')} type='password'/>
          </label>

          <br/>

          <input className="join-button" type="submit" value="JOIN"/>
        </form>
        <ul>
          {
            this.props.signup_errors.map((error, idx) => (
            <li className="error-messages" key={idx}>{error}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Signup);
