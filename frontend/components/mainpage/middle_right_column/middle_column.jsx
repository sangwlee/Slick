import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import ChannelDetailContainer from './channel_detail/channel_detail_container';
import MessagesContainer from './messages/messages_container';
import InputContainer from './input/input_container';

import RightColumn from './right_column/right_column';

class MiddleColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {column: "details", message: null};
  }

  toggleRightColumn(message) {
    if (this.state.column === 'details') {this.setState({column: 'replies', message: message});}
    else {this.setState({column: 'details', message: null});}
  }

  render() {
    return(
      <div  className='middle-container'>
        <ul className='middle-ul'>
          <li
            className='channel-detail-container'>
            <Route
              path="/main/:channelId"
              component={ChannelDetailContainer}/>
          </li>
          <li className='messages-container'>
            <Route
              path="/main/:channelId"
              component={MessagesContainer}/></li>
          <li className='input-container'><InputContainer /></li>
        </ul>
        <RightColumn className='right-container' columnType={this.state.column}/>
      </div>
    );
  }
}

export default withRouter(MiddleColumn);
