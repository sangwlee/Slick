import React from 'react';
import { withRouter } from 'react-router-dom';
import selector from '../../../../util/selector';

class ChannelDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      let newChannelId = parseInt(nextProps.match.params.channelId);
      this.props.requestCurrentChannel(newChannelId);
    }
  }

  render() {
    debugger
    return(
      <h1>
        <ul>
          <li>{this.props.currentChannel.name}</li>
          <li>{this.props.currentChannel.description}</li>
        </ul>
      </h1>
    );
  }
}

export default withRouter(ChannelDetail);
