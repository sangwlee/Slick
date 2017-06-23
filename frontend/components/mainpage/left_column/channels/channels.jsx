import React from 'react';
import selector from '../../../../util/selector';
import { Link, Route, withRouter } from 'react-router-dom';

class Channels extends React.Component {
  constructor(props) {
    super(props);

    this.requestAllUsersOfChannel = this.requestAllUsersOfChannel.bind(this);
  }

  requestAllUsersOfChannel(channel_id) {
    return () => {
      this.props.requestAllUsersOfChannel(channel_id);
    };
  }

  render() {
    return(
      <div>
        <ul>
          <h1>CHANNELS</h1>
          <ul>
            {
              selector(this.props.channels).map(channel =>
                <li
                  onClick={this.requestAllUsersOfChannel(channel.id)}
                  key={channel.id}>
                  <Link to={`/main/${channel.id}`}>#{channel.name}</Link>
                </li>
              )
            }
          </ul>
        </ul>
        <ul>
          <h1>DIRECT MESSAGES</h1>
          <ul>
            {
              selector(this.props.directMessages).map(directMessage =>
                <li
                  onClick={this.requestAllUsersOfChannel(directMessage.id)}
                  key={directMessage.id}>
                  <Link to={`/main/${directMessage.id}`}>#{directMessage.name}</Link>
                </li>
              )
            }
          </ul>
        </ul>

      </div>
    );
  }
}

export default withRouter(Channels);
