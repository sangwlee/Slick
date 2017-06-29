import React from 'react';
import { withRouter } from 'react-router-dom';
import MyEmojiInput from './emoji';
import ReactingComponent from './emoji2';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      kind: 'normal',
      channel_id: null,
      user_id: this.props.currentUser.id,
      emoticonPickerOpen: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.toggleEmojiDisplay = this.toggleEmojiDisplay.bind(this);
    this.addEmoticon = this.addEmoticon.bind(this);
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

  toggleEmojiDisplay(){
    this.setState({ emoticonPickerOpen: !this.state.emoticonPickerOpen });
  }

  addEmoticon(emoticon){
    this.setState({content: this.state.content+ " "+ emoticon});
    $("#message-content-input").focus();
  }

  render() {
    let emojiDisplay = "";

    if (this.state.emoticonPickerOpen) {
      emojiDisplay = <MyEmojiInput
        addEmoticon={this.addEmoticon}
        toggleEmojiDisplay={this.toggleEmojiDisplay} />;
    }

    const currentChannel = this.props.currentChannel;

    return(
      <div className="input-container-div">
        <form className="input-form-container" onSubmit={this.handleSubmit}>
          <input
            className='input-message'
            placeholder={(currentChannel.kind === 'dm') ?
              `Message @${currentChannel.name}` : `Message #${currentChannel.name}`}
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
