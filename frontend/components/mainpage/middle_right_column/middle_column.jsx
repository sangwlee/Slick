import React from 'react';

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
        <ul>
          <li><ChannelDetailContainer /></li>
          <li><MessagesContainer /></li>
          <li><InputContainer /></li>
        </ul>

        <RightColumn column_type="details"/>
      </div>
    );
  }
}

export default MiddleRightColumn;
