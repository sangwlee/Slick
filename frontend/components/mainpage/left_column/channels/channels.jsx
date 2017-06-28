import React from 'react';
import selector from '../../../../util/selector';
import { Link, Route, withRouter, NavLink } from 'react-router-dom';

import Modal from 'react-modal';
import NewChannel from './new_channel';
import NewDm from './new_dm';

const customStyles = {
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

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(channel_id) {
    // debugger;
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

   componentDidMount() {
    //  ### PUSHER ###
     this.pusher = new Pusher('362129d066c84b9dc60e', {
       encrypted: true
     });

     Pusher.logToConsole = true;
     const channel = this.pusher.subscribe("channels");
     channel.bind("channel_created", () => {this.props.requestAllChannelsOfUser(this.state.userId);});
    //  ### PUSHER ###
   }

   componentWillUnmount() {
     this.pusher.unsubscribe(parseInt(this.props.match.params.channelId).toString());
   }

  render() {
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
        );
      }
    }

    return(
      <div>
        <ul>
          <h1
            onClick={this.openModal("channelModal")}
            className="channel-directmessage-heading channels-heading">
            <span className="channels-icon">CHANNELS</span>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </h1>
          <Modal
            onRequestClose={this.closeModal("channelModal")}
            style={customStyles}
            contentLabel="Modal"
            isOpen={this.state.channelModal}
            onClose={this.closeModal("channelModal")}>
            <NewChannel closeModal={this.closeModal('channelModal')}/>
          </Modal>
          <ul className="channel-list channel-unique">
            {
              this.props.channels.map(channel => {
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
                  </li>
                )

              }
              )
            }
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
            style={customStyles}
            contentLabel="Modal"
            isOpen={this.state.dmModal}
            onClose={this.closeModal('dmModal')}>
            <NewDm closeModal={this.closeModal('dmModal')}/>
          </Modal>
          <ul className="channel-list">
            {
              selector(this.props.directMessages).map(directMessage =>
                <li
                  onClick={this.props.requestAllUsersOfChannel.bind(null, directMessage.id)}
                  key={directMessage.id}>
                  <NavLink
                    exact to={`/main/${directMessage.id}`}
                    activeClassName="selected">
                    <span className="pound-sign">@</span>
                    {"  " + channelName(directMessage.name)}
                    <i onClick={this.handleClick(directMessage.id)} className="fa fa-minus-circle delete-channel-icon" aria-hidden="true"></i>
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
