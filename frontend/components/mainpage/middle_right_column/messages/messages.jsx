import React from 'react';
import { withRouter } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import MessageItem from './message_item';

const notificationStyle = {
  NotificationItem: {
    DefaultStyle: {
      width: "66.5%"
    }}};

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this._notificationSystem = true;
    this.requestMessages = this.requestMessages.bind(this);
    this.notification = this.notification.bind(this);
  }

  requestMessages(data) {
    this.newMessage = data.message;
    this.author = this.props.currentUser;
    this.currentChannelId = parseInt(this.props.match.params.channelId);

    if (this.newMessage.channel_id === this.currentChannelId) {
      return this.props.requestAllMessagesOfChannel(this.currentChannelId);
    } else {
      return this.addNotification(data);
    }
  }

  notification(condition) {
    if (this._notificationSystem && condition === 'modifyFail') {
      this._notificationSystem.addNotification({
        title: `Cannot modify others' messages!`,
        level: 'error',
        position: 'bl',
      });}

      else if (this._notificationSystem && condition === 'deleteSuccess') {
      this._notificationSystem.addNotification({
        title: `Delete success!`,
        level: 'success',
        position: 'bl',
      });}}

  componentDidMount() {
      let channelId = parseInt(this.props.match.params.channelId);
      this.props.requestAllMessagesOfChannel(channelId);

      this.pusher = new Pusher('362129d066c84b9dc60e', {
        encrypted: true
      });

      this.channel = this.pusher.subscribe(channelId.toString());

      this.channel.bind('message_published', (data) => {
        this.requestMessages(data);
      });

      this.channel.bind('user_updated', () => {
        this.props.requestAllUsersOfChannel(channelId);
      });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      let newChannelId = parseInt(nextProps.match.params.channelId);
      this.props.requestAllMessagesOfChannel(newChannelId);
      this.pusher.subscribe(newChannelId.toString());
    }
  }

  render() {
    const sortedMessages = this.props.messages.sort(
      function(a, b) {
        return parseFloat(a.id) - parseFloat(b.id);
      }
    );

    // debugger;

    return(
      <div className="all-messages-container">
        <NotificationSystem
          style={notificationStyle}
          ref={n => this._notificationSystem = n} />
        <ul>
          {
            sortedMessages.map( message => {
              return (<MessageItem
                requestAllMessagesOfChannel={this.props.requestAllMessagesOfChannel}
                key={message.id}
                notification={this.notification}
                allUsers={this.props.allUsers}
                currentUser={this.props.currentUser}
                message={message} />)
            })
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Messages);
