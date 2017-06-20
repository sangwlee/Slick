import React from 'react';
import { withRouter } from 'react-router';

class Signup extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', email: '', firstname: '', lastname: ''};

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
    this.props.signup(user).then(() => this.props.history.push('/main'));
  }

  render() {
    return(
      <div className="signup-container">
        <h3>First Time?</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Yourname:
            <input onChange={this.handleChange('firstname')} type='text'/>
            <input onChange={this.handleChange('lastname')} type='text'/>
          </label>

          <br/>

          <label>Username:
            <input onChange={this.handleChange('username')} type='text'/>
          </label>

          <br/>

          <label className="emailInput">Email:
            <input onChange={this.handleChange('email')} type='text'/>
          </label>

          <br />

          <label>Password:
            <input onChange={this.handleChange('password')} type='password'/>
          </label>

          <br/>

          <input type="submit" value="JOIN"/>
        </form>
        <ul className="errorMessages">
          {
            this.props.errors.map((error, idx) => (
            <li className="errorMessages" key={idx}>{error}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Signup);
