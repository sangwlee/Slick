import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import ChannelDetailContainer from './channel_detail/channel_detail_container';
import MessagesContainer from './messages/messages_container';
import InputContainer from './input/input_container';

import RightColumn from './right_column/right_column';

class MiddleRightColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='middle-right-container'>
        <ul className='middle-container'>
          <li className='channel-detail-container'><Route exact path="/main/:channelId" component={ChannelDetailContainer}/></li>
          <li>MESSAGES</li>
          <li className='messages-container messages'><Route exact path="/main/:channelId" component={MessagesContainer}/></li>
          <li className='input-container'><InputContainer /></li>
        </ul>

        <RightColumn className='right-container' column_type="details"/>
      </div>
    );
  }
}

export default MiddleRightColumn;
