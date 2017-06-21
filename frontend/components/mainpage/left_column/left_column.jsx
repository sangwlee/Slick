import React from 'react';
import ProfileContainer from './profile/profile_container';
import ChannelsContainer from './channels/channels_container';
import DirectMessagesContainer from './direct_messages/direct_messages_container';

class LeftColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul>
          <li><ProfileContainer /></li>
          <li><ChannelsContainer /></li>
          <li><DirectMessagesContainer /></li>
        </ul>
      </div>
    );
  }
}

export default LeftColumn;
