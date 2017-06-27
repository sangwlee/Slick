import React from 'react';
import { withRouter } from 'react-router-dom';
import selector from '../../../../util/selector';
import Modal from 'react-modal';
import ChannelInvite from './channel_invite';

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

class ChannelDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  openModal(type) {
    return () => {
      this.setState({[type]: true});

    };
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
    const subscribedUsers = this.props.users;
    const allUsers = this.props.allUsers;
    const unsubscribedUsers = [];

    allUsers.forEach( user => {
      if (!subscribedUsers[user.id]) {
        unsubscribedUsers.push(user);
      }
    });

    // debugger;

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
            <li className='channel-title'>
              {marker + channelName(this.props.currentChannel.name)}
              <i onClick={this.openModal('modalIsOpen')} className="fa fa-user-plus invite-icon" aria-hidden="true"></i>
            </li>
            <li className='channel-info'>
              <i className="fa fa-user-o"></i> {numbUsers} <span>|</span> {this.props.currentChannel.description}
            </li>
          </ul>
          <Modal
            onRequestClose={this.closeModal("modalIsOpen")}
            style={customStyles}
            contentLabel="Modal"
            isOpen={this.state.modalIsOpen}
            onClose={this.closeModal("modalIsOpen")}>
            <ChannelInvite
              closeModal={this.closeModal("modalIsOpen")}
              currentChannel={this.props.currentChannel}
              subscribedUsers={selector(subscribedUsers)}
              unsubscribedUsers={unsubscribedUsers}/>
          </Modal>
      </h1>
    );
  }
}

export default withRouter(ChannelDetail);
