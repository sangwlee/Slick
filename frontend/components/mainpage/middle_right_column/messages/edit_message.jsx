import React from 'react';

class EditMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.message.id,
      content: this.props.message.content,
      kind: this.props.message.kind,
      user_id: this.props.message.user_id,
      channel_id: this.props.message.channel_id,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.currentTarget.value});
    };
  }

  render() {
    return (
      <div>
        <ul className='edit-message-container'>
          <li>
            <input
              onChange={this.handleChange('content')}
              placeholder={this.state.content}
              type="text">
            </input>
          </li>
          <li>
            <button id='button' onClick={this.handleClick}>Edit Message</button>
          </li>
        </ul>
      </div>

    );
  }
}

export default EditMessage
