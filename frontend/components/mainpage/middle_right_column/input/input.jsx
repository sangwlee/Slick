import React from 'react';
import { withRouter } from 'react-router-dom';


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'Write a message!',
      kind: 'normal',
      channel_id: null,
      user_id: this.props.currentUser.id};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.empty = this.empty.bind(this);
  }

  empty(type) {
    return (e) => {
      if (e.currentTarget.value !== 'First' ||
      e.currentTarget.value !== 'Last') {
        this.setState({[type]: ''});
      }
    };
  }

  handleChange(type) {
    return (e) => {
      if (this.state[type] === 'Write a message!') {
        this.setState({[type]: ''});
      }
      this.setState({[type]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.content !== 'Write a message!') {
      let channelId = parseInt(this.props.history.location.pathname.slice(6));
      // debugger
      this.state.channel_id = channelId;
      const messageData = Object.assign({}, this.state);
      this.props.createMessage(messageData)
      .then(() =>this.setState({content: 'Write a message!'}));
    }
  }

  render() {
    return(
      <div>
        <h1>INPUT</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            onClick={this.empty('content')}
            onChange={this.handleChange('content')}
            type="text"
            value={this.state.content}>
          </input>
        </form>
      </div>
    );
  }
}

export default withRouter(Input);
