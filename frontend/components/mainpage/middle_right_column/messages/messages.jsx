import React from 'react';
import { withRouter } from 'react-router-dom';
import selector from '../../../../util/selector';
import {
  fetchAllMessagesOfChannel
} from '../../../../util/messages_util';

import NotificationSystem from 'react-notification-system';
import ReactingComponent from '../input/emoji2';
import Modal from 'react-modal';

const notificationStyle = {
  NotificationItem: {
    DefaultStyle: {
      width: "66.5%"
    }}
};

const modalStyle = {
  overlay : {
    backgroundColor       : 'rgba(255, 255, 255, 0)',
    zIndex                : 1
  },

  content : {
    position              : 'absolute',
    top                   : '10%',
    left                  : '18%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emoji: false,
      comment: false,
      edit: false,
      delete: false,
    };

    this.time = this.time.bind(this);
    this.requestMessages = this.requestMessages.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(type) {
    return () => {
      this.setState({[type]: true});
    };
    debugger;
  }

  closeModal(type) {
    return () => {
      this.setState({[type]: false});
    };
  }

  handleClick(type, message) {
    // this.setState({[type]: false});
    return () => {
      if (type === 'emoji') {
        this.setState({emoji: true});
      } else if (type === 'comment') {

      } else if (type === 'edit') {
        this.openModal('edit');
      } else if (type === 'delete') {
        if (message.user_id === this.props.currentUser.id) {
          this.props.deleteMessage(message.id);
          this.notification('deleteSuccess');
        } else {
          this.notification('deleteFail');
        }}};
  }

  notification(condition) {
    if (this._notificationSystem && condition === 'deleteFail') {
      this._notificationSystem.addNotification({
        title: `Cannot delete others' messages!`,
        level: 'error',
        position: 'bl',
      });
    } else if (this._notificationSystem && condition === 'deleteSuccess') {
      this._notificationSystem.addNotification({
        title: `Delete success!`,
        level: 'success',
        position: 'bl',
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

      this.pusher = new Pusher('362129d066c84b9dc60e', {
        encrypted: true
      });

      // Pusher.logToConsole = true;
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
    {ago = `${((todayDate - day < 0) ? (todayDate - day + monthNames[mo]) : (todayDate - day))} days ago`;}
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

    const findUser = (author_id) => {
      if (usersIds.includes(author_id)) {
        return usersObj[author_id];
      }
      return allUsersObj[author_id];
    };

    let emojiWindow;

    // if (this.state.emoji) {
    //   return (
    //     <ReactingComponent />
    //   )
    // }
    //
    // const emojiOpen = () => ({
    //   <ReactingComponent />
    // })

    return(
      <div>
        <NotificationSystem
          style={notificationStyle}
          ref={n => this._notificationSystem = n} />
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
                  <li className='message-buttons'>
                    <button
                      onClick={this.handleClick('emoji', message)}>
                      <i
                        className="fa fa-smile-o message-button-emoticon"
                        aria-hidden="true"></i>
                    </button>
                    <button
                      onClick={this.handleClick('comment', message)}>
                      <i
                        className="fa fa-commenting"
                        aria-hidden="true"></i>
                    </button>
                    <button
                      onClick={this.handleClick('edit', message)}>
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"></i>
                    </button>
                    <button
                      onClick={this.handleClick('delete', message)}>
                      <i
                        className="fa fa-trash"
                        aria-hidden="true"></i>
                    </button>
                  </li>
                  { (this.state.emoji) ? <ReactingComponent /> : '' }
                  </li>)})}
        </ul>
        <Modal
          style={modalStyle}
          contentLabel="Modal"
          onRequestClose={this.closeModal("edit")}
          isOpen={this.state.edit}
          onClose={this.closeModal("edit")}>
          <h1>Hello!</h1>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Messages);
