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
      this.props.requestSingleChannel(newChannelId);
    }
  }

  render() {
    return(
      <h1>
        {
          selector(this.props.channels).map( channel => {
            <ul>
              <li>{channel.name}</li>
              <li>{channel.description}</li>
            </ul>
          })
        }
      </h1>
    );
  }
}

export default withRouter(ChannelDetail);
