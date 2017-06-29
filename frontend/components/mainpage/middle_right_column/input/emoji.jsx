import React from 'react';
import EmojiPicker from 'react-emoji-picker';
import emojiMap from 'react-emoji-picker/lib/emojiMap';
import EnhanceWithClickOutside from 'react-click-outside';

class MyEmojiInput extends React.Component {
  constructor(){
    super();
    this.emojiPickerStyles = {
      position        : 'absolute',
      right           : '23%',
      bottom          : '70px',
      backgroundColor : 'white',
      width           : '344px',
      height          : '270px',
      padding         : '.3em .7em',
      border          : '1px solid silver',
      zIndex          : '2',
      borderRadius    : '5px',
      overflow        : 'hidden'
    };
    this.state = {
        emoji: null,
      };

    this.toggleEmojiPicker = this.toggleEmojiPicker.bind(this);
    this.updateState = this.updateState.bind(this);
    this.setEmoji = this.setEmoji.bind(this);
    this.validateEmoji = this.validateEmoji.bind(this);
    this.grabKeyPress = this.grabKeyPress.bind(this);
    this.emojiPicker = this.emojiPicker.bind(this);
    }

  toggleEmojiPicker(e) {
    if(this.refs.emoji.contains(e.target)) {
      this.setState({showEmojiPicker: true});
    } else {
      setTimeout(this.validateEmoji, 10);
      this.setState({showEmojiPicker: false});
    }
  }

  validateEmoji() {
    var matched = emojiMap.filter(function(emoji) {
      return `:${emoji.name}:` === this.state.emoji;
    });

    if(matched.length === 0) {
      this.setState({emoji: null});
    }
  }

  updateState (e) {
    this.setState({emoji: e.target.value});
  }

  setEmoji(emoji) {
    this.setState({emoji: emoji});
    this.props.addEmoticon(emoji);
    this.props.toggleEmojiDisplay();
  }

  grabKeyPress(e) {
    if(e.keyCode === 13) {
      e.preventDefault();
    }
  }

  handleClickOutside(e) {
    e.stopPropagation();
    this.props.toggleEmojiDisplay();
  }

  emojiPicker() {
    return (
      <EmojiPicker
        style={this.emojiPickerStyles}
        onSelect={this.setEmoji}
        query={this.state.emoji}
      />);
    }

  render() {
    return (
      <div ref="emoji" className="emoji-form" id="emoji-dropdown">
        {this.emojiPicker()}
      </div>
    );
  }
}

export default EnhanceWithClickOutside(MyEmojiInput);
