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
    this.props.signup(user)
      .then(()=> this.props.history.push('/main/1'));
    // debugger
    // this.props.createSubscription(this.props.currentUser.id, 1);
  }

  render() {
    return(
      <div className="signup-container">
        <h3>First Time?</h3>
        <form onSubmit={this.handleSubmit}>
          <label className="name-inputs"><span className="shift-your-name">Your name</span>
            <input className="signup-turn-color" placeholder="First" onChange={this.handleChange('firstname')} type='text' value={this.state.firstname}/>
            <input className="signup-turn-color" placeholder="Last" onChange={this.handleChange('lastname')} type='text' value={this.state.lastname}/>
          </label>

          <br/>

          <label><span className="shift-username name-inputs">Username</span>
            <input className="longerInput signup-turn-color" onChange={this.handleChange('username')} type='text'/>
          </label>

          <div><hr /></div>

          <label><span className="shift-email">Email</span>
            <input className="longerInput signup-turn-color" onChange={this.handleChange('email')} type='text'/>
          </label>

          <br />

          <label><span className="shift-password">Password</span>
            <input className="longerInput signup-turn-color" onChange={this.handleChange('password')} type='password'/>
          </label>

          <br/>

          <input id="button" className="join-button" type="submit" value="JOIN"/>
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
