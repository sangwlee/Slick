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
    const channel = this.props.currentChannel;
    const channelName = (name) => {
      if (name) {
        if (name.length > 100) {
          return (name.slice(0, 100) + "...");
        }

        return name;
      }
    };

    const marker = (channel.kind === 'dm') ? '@' : "#";

    let users = selector(this.props.users);
    let numbUsers = users.length;

    return(
      <h1>
          <ul className='channel-detail'>
            <li className='channel-title'>{marker + channelName(this.props.currentChannel.name)}</li>
            <li className='channel-info'>
              <i className="fa fa-user-o"></i> {numbUsers} <span>|</span> {this.props.currentChannel.description}
            </li>
          </ul>
      </h1>
    );
  }
}

export default withRouter(ChannelDetail);
