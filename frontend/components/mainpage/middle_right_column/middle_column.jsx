import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import ChannelDetailContainer from './channel_detail/channel_detail_container';
import MessagesContainer from './messages/messages_container';
import InputContainer from './input/input_container';

import RightColumn from './right_column/right_column';

class MiddleColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div  className='middle-container'>
        <ul className='middle-ul'>
          <li className='channel-detail-container'><Route exact path="/main/:channelId" component={ChannelDetailContainer}/></li>
          <li className='messages-container'><Route exact path="/main/:channelId" component={MessagesContainer}/></li>
          <li className='input-container'><InputContainer /></li>
        </ul>
      </div>
    );
  }
}

export default withRouter(MiddleColumn);
