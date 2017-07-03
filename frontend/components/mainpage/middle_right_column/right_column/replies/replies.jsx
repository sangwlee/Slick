import React from 'react';
import selector from '../../../../../util/selector';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NotificationSystem from 'react-notification-system';
import Modal from 'react-modal';
import NewDm from '../../../left_column/channels/new_dm';
import SearchBar from '../search_bar';
import {
  createReply,
  requestAllMessagesOfChannel,
  requestAllRepliesOfMessage,
} from '../../../../../actions/messages_actions';
import ReplyItem from './reply_item';

const notificationStyle = {
  NotificationItem: {
    DefaultStyle: {
      width: "66.5%"
    }}};

class Replies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      kind: 'normal',
      message_id: null,
      channel_id: null,
      user_id: this.props.currentUser.id,
      emoticonPickerOpen: false,
    };

    let pathname = this.props.history.location.pathname;
    this.messageId = parseInt(pathname.slice(pathname.indexOf('message') + 8));
    this.uniqueParticipants = [];
    this.timePosting = this.timePosting.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.notification = this.notification.bind(this);
  }

  openModal(type) {
      this.setState({[type]: true});
  }

  handleClick(user) {
    return () => {
      this.setState({toUser: user});
      this.openModal('modalIsOpen');
    };
  }

  closeModal(type) {
    return () => {
      this.setState({[type]: false});
    };
  }

  timePosting(date) {
    let monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let yr, mo, day;

    if (date) {
      yr = parseInt(date.slice(0,4));
      mo = parseInt(date.slice(6, 8));
      day = parseInt(date.slice(8, 10));
      return `${monthNames[mo - 1]} ${day}, ${yr}`;
    }

    return '';

  }

  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.currentTarget.value});
    };
  }

  handleSubmit(currentMessage) {
    return () => {
      if (this.state.content !== '') {

        this.state.message_id = currentMessage.id;
        const messageData = Object.assign({}, this.state);
        this.props.createReply(messageData)
        .then(() => this.props.requestAllMessagesOfChannel(parseInt(this.props.location.pathname.slice(6))))
        .then(() => { this.setState({content: ''});
      });
    }

  };
  }

  redirect(channelId) {
    return () => {
      this.props.history.push(`/main/${channelId}`);
    };
  }

  render() {
    const channelName = (name) => {
      if (name) {
        if (name.length > 35) {
          return (name.slice(0, 35) + "...");
        }

        return name;
      }
    };

    const currentChannelId = parseInt(this.props.location.pathname.slice(6));
    const sortedReplies = this.props.replies.sort(
      function(a, b) {
        return parseFloat(a.id) - parseFloat(b.id);
      }
    );

    const countReplies = (sortedReplies.length === 0) ? 'No' : sortedReplies.length;
    const participants = sortedReplies.map(reply => this.props.allUsers[reply.user_id]);
    participants.forEach(participant => {
      if (!this.uniqueParticipants.includes(participant.username)) {
        this.uniqueParticipants.push(participant.username);
      }
    });
    const usernamesString = this.uniqueParticipants.join(', ');
    const finalUsernames = (usernamesString.length > 40) ? (usernamesString.slice(40) + " ...") : usernamesString;
    const currentMessage = this.props.currentMessage;

    if (currentMessage) {
      return (
        <div className="right-column-detail-div">
          <li className="search-bar"><SearchBar /></li>
          <div className="right-column-container">
            <li className="channel-detail-about">
              Thread
              <span className='channel-description-heading'>
                {finalUsernames}
              </span>
            </li>
            <ReplyItem
              className="original-thread"
              requestAllRepliesOfMessage={this.props.requestAllRepliesOfMessage}
              key={currentMessage.id}
              notification={this.notification}
              allUsers={this.props.allUsers}
              currentUser={this.props.currentUser}
              message={currentMessage} />

            <li className="details-number-heading reply-heading">
              <h1>{countReplies} Replies</h1>
              <i id="button" onClick={this.redirect(currentChannelId)} className="fa fa-times" aria-hidden="true"></i>
            </li>
            <form className="reply-form-container" onSubmit={this.handleSubmit(this.props.currentMessage)}>
              <input
                className='reply-input'
                placeholder='Reply...'
                onChange={this.handleChange('content')}
                type="text"
                value={this.state.content}>
              </input>
            </form>
            <div className="reply-space">
              <div className="all-replies-container">
                <NotificationSystem
                  style={notificationStyle}
                  ref={n => this._notificationSystem = n} />
                <ul>
                  {
                    sortedReplies.map( reply => {
                      return (<ReplyItem
                        requestAllRepliesOfMessage={this.props.requestAllRepliesOfMessage}
                        key={reply.id}
                        notification={this.notification}
                        allUsers={this.props.allUsers}
                        currentUser={this.props.currentUser}
                        message={reply} />)
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
      )
    } else {return <div></div>}
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
}


const mapStateToProps = (state, ownProps) => {
  const currentMessage = state.messages[parseInt(ownProps.match.params.message_id)]
  return {
    currentUser: state.session.currentUser,
    currentChannel: state.currentChannel,
    users: state.users,
    allUsers: state.allUsers,
    replies: selector(state.replies).filter(reply =>
      reply.message_id === parseInt(ownProps.match.params.message_id)),
    currentMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createReply: replyData => dispatch(createReply(replyData)),
    requestAllRepliesOfMessage: message_id =>
      dispatch(requestAllRepliesOfMessage(message_id)),
    requestAllMessagesOfChannel: channel_id =>
      dispatch(requestAllMessagesOfChannel(channel_id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Replies));
