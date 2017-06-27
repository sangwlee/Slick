import React from 'react';
import { withRouter } from 'react-router-dom';


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      kind: 'normal',
      channel_id: null,
      user_id: this.props.currentUser.id,
      placeholderMessage: 'write a message!'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    if (this.state.content !== '') {
      e.preventDefault();
      let channelId = parseInt(this.props.history.location.pathname.slice(6));
      this.state.channel_id = channelId;
      const messageData = Object.assign({}, this.state);
      this.props.createMessage(messageData)
      .then(() => {
        this.setState({content: ''});
      });
    }
  }

  componentDidMount() {
    // const currentChannel = this.props.currentChannel;
    // let placeholderMessage = (currentChannel.kind === 'dm') ?
    //   ("@" + currentChannel.name) : ("#" + currentChannel.name);
    // this.setState({placeholderMessage: placeholderMessage});
    // debugger
  }

  componentWillReceiveProps(nexProps) {
    debugger;
    if (this.props.match.params.channelId !== nextProps.matchparams.channelId) {
      this.setState({placeholderMessage: this.props.currentChannel.name});
    }
  }

  render() {
    // debugger;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className='input-message'
            placeholder={this.state.placeholderMessage}
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
