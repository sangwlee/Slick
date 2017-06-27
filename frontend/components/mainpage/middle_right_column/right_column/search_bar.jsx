import React from 'react';
import { connect } from 'react-redux';
import {
  createSubscription,
  requestSingleChannel,
  requestAllChannelsOfUser,
} from '../../../../actions/channels_actions';
import selector from '../../../../util/selector';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';

const customStyles = {
  overlay : {
  position                : 'fixed',
  top                     : 0,
  left                    : 0,
  right                   : 0,
  bottom                  : 0,
  backgroundColor         : 'rgba(0, 0, 0, 0)'
  },
  content : {
    top                   : '3%',
    left                  : '84.5%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-30%',
    transform             : 'none',
  }
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      publicChannels: this.props.publicChannels,
      selectedChannel: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  openModal(type) {
    return () => {
      this.setState({publicChannels: this.props.publicChannels});
      this.setState({[type]: true});
    };
  }

  closeModal(type) {
    return () => {
      this.setState({[type]: false});
    };
  }

  handleChange(e) {
    const currentText = e.target.value;
    const selectedChannels = [];

    this.props.publicChannels.forEach(channel => {
      if (currentText.toLowerCase() === channel.name.slice(0, currentText.length).toLowerCase()) {
        selectedChannels.push(channel);
      }
    });

    this.setState({publicChannels: selectedChannels});
  }

  handleClick(channel) {
    return () => {
      this.setState({selectedChannel: channel});
      this.props.createSubscription({user_id: this.props.currentUser.id, channel_id: channel.id});
      this.props.requestAllChannelsOfUser(this.props.currentUser.id);
      this.props.history.push(`/main/${channel.id}`);
      this.closeModal('modalIsOpen')();
    };
  }

  handleSubmit(e) {
    if (this.state.publicChannels.length === 1) {
      e.preventDefault();
      // this.setState({selectedChannel: this.state.publicChannels[0]});
      // let channel = this.state.selectedChannel;
      let channel = this.state.publicChannels[0];
      this.props.createSubscription({user_id: this.props.currentUser.id, channel_id: channel.id});
      this.props.requestAllChannelsOfUser(this.props.currentUser.id);
      this.props.history.push(`/main/${channel.id}`);
      this.closeModal('modalIsOpen')();

    }
  }

  componentWillUnmount() {
  }

  render() {
    const publicChannels = this.props.publicChannels;

    return (
      <div className='search-bar-containing-div'>
        <i
          onClick={this.openModal('modalIsOpen')}
          className="fa fa-search search-icon"
          aria-hidden="true">
        </i>
        <Modal
          onRequestClose={this.closeModal("modalIsOpen")}
          style={customStyles}
          contentLabel="Modal"
          isOpen={this.state.modalIsOpen}
          onClose={this.closeModal("modalIsOpen")}>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <input
              placeholder="search for public channel"
              onChange={this.handleChange}
              type="text">
            </input>
            <ul>
              {this.state.publicChannels.map(channel =>
                <li
                  onClick={this.handleClick(channel)}
                  key={channel.id}>#
                  {(channel.name.length >= 20) ? channel.name.slice(0, 20) + " ..." : channel.name }
                </li>
              )}
            </ul>
          </form>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const publicChannels = [];
  const myChannels = selector(state.channels).map(channel => channel.id)

  selector(state.allChannels).forEach(channel => {
    if (channel.kind === 'public' && !(myChannels.includes(channel.id))) {
      // debugger;
      publicChannels.push(channel);
    }
  })

  return {
    publicChannels: publicChannels,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createSubscription: (user_id, channel_id) =>
      dispatch(createSubscription(user_id, channel_id)),
    requestSingleChannel: channel_id =>
      dispatch(requestSingleChannel(channel_id)),
    requestAllChannelsOfUser: user_id =>
      dispatch(requestAllChannelsOfUser(user_id)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar));
