import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import ChannelDetailContainer from './channel_detail/channel_detail_container';
import MessagesContainer from './messages/messages_container';
import InputContainer from './input/input_container';

import RightColumn from './right_column/right_column';
import MiddleColumn from './middle_column';

class MiddleRightColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='middle-right-container'>
        <MiddleColumn />
      </div>
    );
  }
}

export default MiddleRightColumn;
