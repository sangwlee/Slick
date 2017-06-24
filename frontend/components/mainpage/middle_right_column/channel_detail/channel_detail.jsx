import React from 'react';
import { withRouter } from 'react-router-dom';
import selector from '../../../../util/selector';

class ChannelDetail extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  componentDidMount() {
    let newChannelId = parseInt(this.props.match.params.channelId);
    this.props.requestCurrentChannel(newChannelId);
    this.props.requestAllUsersOfChannel(newChannelId);
    // debugger
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId){
      let newChannelId = parseInt(nextProps.match.params.channelId);
      this.props.requestCurrentChannel(newChannelId);
      this.props.requestAllUsersOfChannel(newChannelId);
    }
  }

  render() {
    let users = selector(this.props.users);
    let numbUsers = users.length;

    return(
      <h1>
        <ul>
          <li>{this.props.currentChannel.name}</li>
          <li>
            {this.props.currentChannel.description}
            <i className="fa fa-user-o"></i>{" " + numbUsers}
          </li>
        </ul>
      </h1>
    );
  }
}

export default withRouter(ChannelDetail);
