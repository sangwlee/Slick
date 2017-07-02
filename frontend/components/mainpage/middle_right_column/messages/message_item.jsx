import React from 'react';
import ReactingComponent from '../input/emoji2';
import { connect } from 'react-redux';
import {
  deleteMessage,
  updateMessage,
  requestAllMessagesOfChannel,
  requestAllRepliesOfMessage,
} from '../../../../actions/messages_actions';
import NotificationSystem from 'react-notification-system';
import { withRouter } from 'react-router-dom';
import selector from '../../../../util/selector';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      emoji: false,
      comment: false,
      edit: false,
      delete: false,
      id: this.props.message.id,
      content: this.props.message.content,
      kind: this.props.message.kind,
      user_id: this.props.message.user_id,
      channel_id: this.props.message.channel_id,
      created_at: this.props.message.created_at,
      updated_at: this.props.message.updated_at,
    };

    this.message = this.props.message;
    this.currentUser = this.props.currentUser;
    this.allUsers = this.props.allUser;
    this.time = this.time.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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
    else if (todayMo - mo === 1 && todayDate >= day) {ago = "a month ago";}
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

  handleClick(type, message) {
    // const message = this.props.message;
    const currentChannel = parseInt(this.props.location.pathname.slice(6));
    return () => {
      if (type === 'emoji') { this.setState({ emoji: !this.state.emoji });
      } else if (type === 'comment') {
        // this.props.requestAllRepliesOfMessage(message.id);
        this.props.history.push(`/main/${currentChannel}/message/${message.id}`);

      } else if (type === 'edit') {
        if (this.props.message.user_id === this.props.currentUser.id) {
          this.setState({ edit: !this.state.edit });
        } else { this.props.notification('modifyFail');}

      } else if (type === 'delete') {
        if (message.user_id === this.props.currentUser.id) {
          this.props.deleteMessage(message.id);
          this.props.requestAllMessagesOfChannel(currentChannel);

          if (this.props.location.pathname.includes(message.id.toString())) {
            this.props.history.push(`/main/${currentChannel}`);
          }
          this.props.notification('deleteSuccess');

      } else { this.props.notification('modifyFail');}}
    };
  }

  handleEdit(e) {
    const currentChannel = parseInt(this.props.location.pathname.slice(6));
    const currentLocation = this.props.history.location.pathname;

    if (this.state.content !== '') {
      e.preventDefault();
      this.props.updateMessage(this.state.id, this.state)
        .then(message =>
          this.setState({
            edit: !this.state.edit,
            content: message.content,
            created_at: message.created_at,
            updated_at: message.updated_at,
          }))
          .then(() =>this.props.requestAllMessagesOfChannel(parseInt(this.props.location.pathname.slice(6))))
          .then(() => this.props.history.push(`/main/${currentChannel}`))
          .then(() => this.props.history.push(`${currentLocation}`));

    }
  }
  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.currentTarget.value});
    };
  }

  render() {
    // debugger;
    const countReplies = (this.props.replies.length === 0) ?
      (<span></span>) : (<button id="button" className="messages-replies-count">{this.props.replies.length.toString() + ' replies'}</button>);

    const editStatus = (this.state.created_at === this.state.updated_at) ? '' : "  (edited)";

    return (
      <li className='individual-message-container' key={this.props.message.id}>
        <img className='profile-pic'
          src={(this.props.allUsers[this.props.message.user_id].image_url)}/>
        <ul className='message-content-container'>
          <li>
            <span className='username'>
              {(this.props.allUsers[this.props.message.user_id].username)}
            </span>
            <span className="timePosting">
              {this.time(this.props.message.created_at)}
            </span>
          </li>
          <li className="message-content">
            { (this.state.edit) ?
              (<form onSubmit={this.handleEdit} className="mesage-edit-input-div">
                  <input
                  className="message-edit-input"
                  onChange={this.handleChange('content')}
                  type='text'
                  value={this.state.content}>
                  </input>
                  <button type="button" id="button" onClick={this.handleClick('edit')}>Cancel</button>
                  <button type="button" id="button" onClick={this.handleEdit}>Save Changes</button>
                </form>) :
              (this.props.message.content) + editStatus}
          </li>
          <li>
            { countReplies }
            { (this.state.emoji) ? <ReactingComponent className="emoji-container"/> : '' }
          </li>
        </ul>
        <ul className='message-buttons'>
          <li>
            <button type="button" onClick={this.handleClick('emoji', this.props.message)}><i className="fa fa-smile-o message-button-emoticon" aria-hidden="true"></i></button>
            <button type="button" onClick={this.handleClick('comment', this.props.message)}><i className="fa fa-commenting" aria-hidden="true"></i></button>
          </li>
          <li>
            <button type="button" onClick={this.handleClick('edit', this.props.message)}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            <button type="button" onClick={this.handleClick('delete', this.props.message)}><i className="fa fa-trash" aria-hidden="true"></i></button>
          </li>
        </ul>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    replies: selector(state.replies).filter(reply =>
      reply.message_id === ownProps.message.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteMessage: message_id => dispatch(deleteMessage(message_id)),
    updateMessage: (messageId, messageData) =>
      dispatch(updateMessage(messageId, messageData)),
    requestAllRepliesOfMessage: message_id =>
      dispatch(requestAllRepliesOfMessage(message_id)),
    requestAllMessagesOfChannel: (channel_id) =>
      dispatch(requestAllMessagesOfChannel(channel_id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageItem));
