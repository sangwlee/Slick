import React from 'react';
import selector from '../../../../../util/selector';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Modal from 'react-modal';
import NewDm from '../../../left_column/channels/new_dm';
import SearchBar from '../search_bar';

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

class Replies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false, toUser: null};

    this.timePosting = this.timePosting.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
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

  handleSubmit(e) {
    if (this.state.content !== '') {
      e.preventDefault();
      let channelId = parseInt(this.props.history.location.pathname.slice(6));
      this.state.channel_id = channelId;
      const messageData = Object.assign({}, this.state);
      this.props.createMessage(messageData)
      .then(() => {
        this.setState({content: ''});
      });
    }
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
    const users = selector(this.props.users);
    const usersCount = users.length;

    const kind = this.props.currentChannel.kind;
    const about = (kind === 'dm') ? `About @${this.props.currentChannel.name}` : `About #${this.props.currentChannel.name}`;
    const details = (kind === 'dm') ? 'Message Details' : 'Channel Details';
    const description = (kind === 'dm') ? 'Message Description' : 'Channel Description';

    return(
      <div className="right-column-detail-div">
        <li className="search-bar"><SearchBar /></li>
        <div className="right-column-container">
          <ul>
            <li className="channel-detail-about">{channelName(about)}</li>
            <li
              className="channel-detail-heading">
              <i className="fa fa-info-circle"></i>
              <span>{details}</span>
            </li>
            <li className='channel-description-heading'>
              {description}
            </li>
            <li className='channel-description-content'>
              {this.props.currentChannel.description}
            </li>
            <li className="channel-detail-created-date">
              Created on {this.timePosting(this.props.currentChannel.created_at)}
            </li>
          </ul>
          <li className="details-number-heading">Replies
            <i onClick={this.redirect(currentChannelId)} className="fa fa-times" aria-hidden="true"></i>
          </li>
          <div className="channel-detail-members-list">
            <form className="input-form-container" onSubmit={this.handleSubmit}>
              <input
                className='input-message'
                placeholder={(this.props.currentChannel.kind === 'dm') ?
                  `Message @${this.props.currentChannel.name}` : `Message #${this.props.currentChannel.name}`}
                onChange={this.handleChange('content')}
                type="text"
                value={this.state.content}>
              </input>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    currentChannel: state.currentChannel,
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Replies));
