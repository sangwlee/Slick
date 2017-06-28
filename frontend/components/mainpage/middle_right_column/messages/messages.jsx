import React from 'react';
import { withRouter } from 'react-router-dom';
import selector from '../../../../util/selector';
import {
  fetchAllMessagesOfChannel
} from '../../../../util/messages_util';

import NotificationSystem from 'react-notification-system';

const style = {
  NotificationItem: {
    DefaultStyle: {
      width: "66.5%"
    }
  }
};

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.time = this.time.bind(this);
    this.requestMessages = this.requestMessages.bind(this);
    this.addNotification = this.addNotification.bind(this);
    this._notificationSystem = null;
  }

  addNotification(data) {
    const channel = data.channel;
    const messageContent = (data.message.content.length > 20) ? data.message.content.slice(0, 20) + " ..." : data.message.content;
    const sig = (data.channel.kind === 'dm') ? '@' : '#';

    if (this._notificationSystem) {
      this._notificationSystem.addNotification({
        title: `${sig} ${channel.name}`,
        message: `${messageContent}`,
        level: 'info',
        position: 'bl',
        action: {
          label: `go to message`,
          callback: () => {
            this.props.history.push(`/main/${channel.id}`);
            this.props.requestAllMessagesOfChannel(channel.id);
          }
        }
      });
    }
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

  componentDidMount() {
      let channelId = parseInt(this.props.match.params.channelId);
      this.props.requestAllMessagesOfChannel(channelId);

      //subscription code goes here
      this.pusher = new Pusher('362129d066c84b9dc60e', {
        encrypted: true
      });

      Pusher.logToConsole = true;
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

  time(date) {
    let monthNames = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30,
      7:31, 8:31, 9:30, 10:31, 11:30, 12:31
    };

    let yr = parseInt(date.slice(0,4));
    let mo = parseInt(date.slice(6, 8));
    let day = parseInt(date.slice(8, 10));
    let hr = parseInt(date.slice(11,13));
    let min = parseInt(date.slice(14,16));
    let sec = parseInt(date.slice(17, 19));
    let amPm = (hr > 11) ? "PM" : "AM";

    if (yr % 4 === 0) {monthNames[2] = 29;}

    let ago;

    let today = new Date();
    let todayYr = today.getFullYear();
    let todayMo = today.getMonth() + 1;
    let todayDate = today.getDate();
    let todayHr = today.getHours();
    let todayMin = today.getMinutes();
    let todaySec = today.getSeconds();

    if (todayYr - yr > 0) {ago = "more than a year ago";}
    else if (todayMo - mo === 1 && todayMo >= mo) {ago = "a month ago";}
    else if (Math.abs(todayMo - mo) > 1)
    {ago = `${((todayMo - mo < 0) ? (todayMo - mo + 12) : (todayMo - mo))} months ago`;}
    else if (todayDate - day === 1 && todayHr >= hr) {ago = 'a day ago';}
    else if (Math.abs(todayDate - day) > 1)
    {ago = `${((todayDate - day < 0) ? (today - day + monthNames[mo]) : (today - day))} days ago`;}
    else if (todayHr - hr === 1 && todayMin >= min) {ago = 'an hour ago';}
    else if (Math.abs(todayHr - hr) > 1)
    {ago = `${((todayHr - hr < 0) ? (todayHr - hr + 24) : (todayHr - hr))} hours ago`;}
    else if (todayMin - min === 1 && todaySec >= sec) {ago = `a minute ago`;}
    else if (Math.abs(todayMin - min) > 1)
    {ago = `${((todayMin - min < 0) ? (todayMin - min + 60) : (todayMin - min))} minutes ago`;}
    else if (todaySec - sec)
    {ago = `${((todaySec - sec < 0) ? (todaySec - sec + 60) : (todaySec - sec))} seconds ago`;}
    else {ago = 'just now';}

    hr = (hr > 12) ? (hr - 12) : hr;

    if (amPm === "AM" && hr === 0) {
      hr = 12;
    }

    let timePosting = `${hr}:${date.slice(14, 16)} ${amPm} | ${ago}`;
    return timePosting;
  }

  render() {
    let allUsersObj = this.props.allUsers;
    let usersObj = this.props.users;
    let usersArr = selector(this.props.users);
    let usersIds = usersArr.map(user => user.id);

    // debugger;
    const findUser = (author_id) => {
      if (usersIds.includes(author_id)) {
        return usersObj[author_id];
      }
      return allUsersObj[author_id];
    };


    return(
      <div>
        <NotificationSystem style={style} ref={n => this._notificationSystem = n} />
        <ul>
          {
            this.props.messages.map( message => {
              return (

                <li className='individual-message-container' key={message.id}>
                  <img className='profile-pic'
                    src={(this.props.allUsers[message.user_id].image_url)}/>
                  <ul className='message-content-container'>
                    <li>
                      <span className='username'>
                        {(this.props.allUsers[message.user_id].username)}
                      </span>
                      <span className="timePosting">
                        {this.time(message.created_at)}
                      </span>
                    </li>
                    <li className="message-content">{message.content}</li>
                  </ul>
                </li>
              )
            }
            )
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Messages);
