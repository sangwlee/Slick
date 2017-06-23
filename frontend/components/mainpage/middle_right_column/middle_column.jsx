import React from 'react';
import { withRouter } from 'react-router-dom';

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
      <div>
        <ul className="middle-column-container">
          <li className="channel-detail-container"><ChannelDetailContainer /></li>
          <li className="messages-container"><MessagesContainer /></li>
          <li className="input-container"><InputContainer /></li>
        </ul>

        <RightColumn column_type="details"/>
      </div>
    );
  }
}

export default withRouter(MiddleRightColumn);
