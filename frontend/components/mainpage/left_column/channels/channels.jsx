import React from 'react';
import selector from '../../../../util/selector';
import { Link, Route, withRouter, NavLink } from 'react-router-dom';

import Modal from 'react-modal';
import NewChannel from './new_channel';
import NewDm from './new_dm';

import NotificationSystem from 'react-notification-system';

const notificationStyle = {
  NotificationItem: {
    DefaultStyle: {
      width: "66.5%"
    }}
};

const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : '60%',
    bottom                : 'auto',
    marginRight           : '-30%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channelModal: false,
      dmModal: false,
      userId: props.currentUser.id,
      channelId: null,
      unsubscribe: true,
    };

    this.pusher = new Pusher('362129d066c84b9dc60e', {
      encrypted: true
    });

    this.uniqueChannelsIds = [];
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.newChannelNotification = this.newChannelNotification.bind(this);
  }

  handleClick(channel_id) {
    return () => {
      this.setState({channelId: channel_id, unsubscribe: true});
      this.props.updateChannel(channel_id, this.state);
      this.props.requestAllChannelsOfUser(this.state.userId)
        .then(() => this.props.history.push('/main/1'));
    };
  }

  openModal(type) {
    return () => {
      this.setState({[type]: true});
    };
  }

  closeModal(type) {
    return () => {
      this.setState({[type]: false});
    };
  }

  componentWillMount() {
      Modal.setAppElement('body');
   }

   newChannelNotification(data) {
     const users_ids = data.users_ids;
     const channel = data.channel;
     const description = (channel.description.length > 20) ?
      channel.description.slice(0, 20) + " ..." : channel.description;
     const sig = (data.channel.kind === 'dm') ? '@' : '#';

     if ((this._notificationSystem) &&
        (users_ids.includes(this.props.currentUser.id)))
        {this._notificationSystem.addNotification({
           title: `NEW CHANNEL:`,
           message: `${sig}${channel.name}`,
           level: 'warning',
           position: 'bl',
         });}
   }

   componentDidMount() {
     const channel = this.pusher.subscribe("channels");
     channel.bind("channel_created", (data) => {
       this.props.requestAllChannelsOfUser(this.state.userId);
       this.newChannelNotification(data);
     });
     channel.bind("subscriptions_changed", () =>
     {this.props.requestAllUsersOfChannel(
       parseInt(this.props.location.pathname.slice(6)));});
   }

   componentWillUnmount() {
     this.pusher.unsubscribe(this.props.match.params.channelId);
   }

  render() {
    const allChannels = this.props.channels.concat(this.props.directMessages);

    allChannels.forEach(channel => {
      if (!this.uniqueChannelsIds.includes(channel.id)) {
        this.pusher.subscribe(channel.id.toString())
        .bind('message_published', (data) => this.requestMessages(data));

        this.uniqueChannelsIds.push(channel.id);
      }
    });

    const channelName = (name) => {
      if (name.length > 17) {
        return (name.slice(0, 17) + "...");
      }
      return name;
    };

    const deleteIcon = (channelId) => {
      if (channelId !== 1) {
        return (
          <i
            onClick={this.handleClick(channelId)}
            className="fa fa-minus-circle delete-channel-icon"
            aria-hidden="true"></i>
        );}}

    const sorted = (channels) => {
      return channels.sort(
        (a, b) => parseFloat(a.id) - parseFloat(b.id)
      )
    }

    return(
      <div>
        <NotificationSystem
          style={notificationStyle}
          ref={n => this._notificationSystem = n} />
        <ul>
          <h1
            onClick={this.openModal("channelModal")}
            className="channel-directmessage-heading channels-heading">
            <span className="channels-icon">CHANNELS</span>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </h1>
          <Modal
            onRequestClose={this.closeModal("channelModal")}
            style={modalStyle}
            contentLabel="Modal"
            isOpen={this.state.channelModal}
            onClose={this.closeModal("channelModal")}>
            <NewChannel closeModal={this.closeModal('channelModal')}/>
          </Modal>
          <ul className="channel-list channel-unique">
            {
              sorted(this.props.channels).map(channel => {
                return (
                  <li
                    onClick={this.props.requestAllUsersOfChannel.bind(null, channel.id)}
                    key={channel.id}>
                    <NavLink
                      to={`/main/${channel.id}`}
                      activeClassName="selected">
                      <span className="pound-sign">#</span>
                      {"  " + channelName(channel.name)}
                      {deleteIcon(channel.id)}
                    </NavLink>
                  </li>)})}
          </ul>
        </ul>
        <ul>
          <h1
            onClick={this.openModal('dmModal')}
            className="channel-directmessage-heading">
            <span className="dm-icon">DIRECT MESSAGES</span>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </h1>
          <Modal
            onRequestClose={this.closeModal('dmModal')}
            style={modalStyle}
            contentLabel="Modal"
            isOpen={this.state.dmModal}
            onClose={this.closeModal('dmModal')}>
            <NewDm closeModal={this.closeModal('dmModal')}/>
          </Modal>
          <ul className="channel-list">
            {
              sorted(this.props.directMessages).map(directMessage =>
                <li
                  onClick={this.props.requestAllUsersOfChannel.bind(null, directMessage.id)}
                  key={directMessage.id}>
                  <NavLink
                    exact to={`/main/${directMessage.id}`}
                    activeClassName="selected">
                    <span className="pound-sign">@</span>
                    {"  " + channelName(directMessage.name)}
                    <i
                      onClick={this.handleClick(directMessage.id)}
                      className="fa fa-minus-circle delete-channel-icon"
                      aria-hidden="true"></i>
                  </NavLink>
                </li>)}
          </ul>
        </ul>
      </div>
    );
  }

  addNotification(data) {
    const channel = data.channel;
    const messageContent = (data.message.content.length > 20) ?
      data.message.content.slice(0, 20) + " ..." : data.message.content;
    const sig = (data.channel.kind === 'dm') ? '@' : '#';

    if (this._notificationSystem) {
      this._notificationSystem.addNotification({
        title: `${sig} ${channel.name}`,
        message: `${messageContent}`,
        level: 'info',
        position: 'bl',
        action: {
          label: 'go',
          callback: () => this.props.history.push(`/main/${channel.id}`)}
      });
    }
  }

  requestMessages(data) {
    this.newMessage = data.message;
    this.author = this.props.currentUser;
    this.currentChannelId = parseInt(this.props.history.location.pathname.slice(6));

    if (this.newMessage.channel_id === this.currentChannelId) {
      return this.props.requestAllMessagesOfChannel(this.currentChannelId);
    } else {
      return this.addNotification(data);
    }
  }
}

export default withRouter(Channels);
