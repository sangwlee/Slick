import React from 'react';
import selector from '../../../../util/selector';
import { Link, Route, withRouter, NavLink } from 'react-router-dom';
// import Modal from 'react-native-modal';

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isModalVisible: false };

    this.requestAllUsersOfChannel = this.requestAllUsersOfChannel.bind(this);
    this._showModal = this._showModal.bind(this);
    this._hideModal = this._hideModal.bind(this);
  }

  _showModal() {
    this.setState({ isModalVisible: true });
  }

  _hideModal() {
    this.setState({isModalVisible: false});
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
          <h1 className="channel-directmessage-heading">CHANNELS
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </h1>
          <ul className="channel-list channel-unique">
            {
              selector(this.props.channels).map(channel =>
                <li
                  onClick={this.requestAllUsersOfChannel(channel.id)}
                  key={channel.created_at}>
                  <NavLink
                    exact to={`/main/${channel.id}`}
                    activeClassName="selected">
                    <span className="pound-sign">#</span>
                    {"  " + channel.name}
                  </NavLink>
                </li>
              )
            }
          </ul>
        </ul>
        <ul>
          <h1 className="channel-directmessage-heading">DIRECT MESSAGES</h1>
          <ul className="channel-list">
            {
              selector(this.props.directMessages).map(directMessage =>
                <li
                  onClick={this.requestAllUsersOfChannel(directMessage.id)}
                  key={directMessage.created_at}>
                  <NavLink
                    exact to={`/main/${directMessage.id}`}
                    activeClassName="selected">
                    <span className="pound-sign">@</span>
                    {"  " + directMessage.name}
                  </NavLink>
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
