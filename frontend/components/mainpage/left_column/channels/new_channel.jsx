import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  createSubscription,
  createChannel,
  requestAllChannelsOfUser,
} from '../../../../actions/channels_actions';
import selector from '../../../../util/selector';
import { merge } from 'lodash';

class NewChannel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      kind: 'public',
      members: [this.props.currentUser],
      created_channel: null,
      privateColor: 'black'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addMember = this.addMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
    this.setPrivate = this.setPrivate.bind(this);
  }

  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createChannel(this.state)
      .then(channel => {
        this.props.history.push(`/main/${channel.channel.id}`);})
      .then(() => this.props.closeModal());
  }

  addMember(member, members) {
    return () => {
      let new_members = members.concat(member);
      this.setState({members: new_members});
    };
  }

  removeMember(member, members) {
    return () => {
      if (member !== this.props.currentUser) {
        let member_index = members.indexOf(member);
        members.splice(member_index, 1);
        this.setState({members: members});
      }
    };
  }

  setPrivate() {
    let changeTo = (this.state.kind === 'public') ? 'private' : 'public';
    let colorChange = (this.state.privateColor === 'black') ? 'green' : 'black';
    this.setState({kind: changeTo, privateColor: colorChange});
  }

  componentWillUnmount() {
    this.props.requestAllChannelsOfUser(this.props.currentUser.id);
  }

  render() {
    const allUsers = selector(this.props.allUsers);
    allUsers.splice((this.props.currentUser.id - 1), 1);
    const otherUsers = allUsers;

    return(
      <div className="create-channel-container">
        <ul className="create-channel-heading">
          <li>
            <i
              onClick={this.props.closeModal}
              className="fa fa-times-circle exit-create-channel"
              aria-hidden="true">
            </i>
          </li>
          <li className="create-your-channel">CREATE A CHANNEL</li>
          <li>Channel Name:</li>
          <li>
            <input
              onChange={this.handleChange('name')}
              type="text"
              placeholder="Enter channel's name"
          /></li>
          <li>Channel Description:</li>
          <li>
            <input
              onChange={this.handleChange('description')}
              type="text"
              placeholder="Describe channel"
          /></li>
        <button
          className="private-button"
          onClick={this.setPrivate}
          style={{color:this.state.privateColor}}>
          <i
            className="fa fa-user-secret"
            aria-hidden="true"></i>
          <span>Click to make it private!</span>
        </button>
        </ul>
          <li className='userslist-headings'>Members:</li>
          <ul className="create-channel-userslist current-user-nullify-cursor">
            {this.state.members.map( user =>
                <li
                  onClick={this.removeMember(user, this.state.members)}
                  key={user.id}>
                  <img src={user.image_url}/>
                  {user.username}
                </li>
              )}
          </ul>
          <li className='userslist-headings'>Available Users:</li>
          <ul className="create-channel-userslist">
            {
              otherUsers.map( user => {
                if (!this.state.members.includes(user)) {
                    return (
                      <li
                      onClick={this.addMember(user, this.state.members)}
                      key={user.id}>
                      <img src={user.image_url}/>
                      {user.username}
                      </li>
                    )}})}
          </ul>
          <button
            id="button"
            className="create-new-channel-button"
            onClick={this.handleSubmit}>Create
          </button>
          <ul>
            {this.props.channelErrors.map((error, idx) =>
              <li className="error-messages" key={idx}>{error}</li>)}
          </ul>
      </div>
    );}
}

const mapStateToProps = state => {
  return {
    allUsers: state.allUsers,
    currentUser: state.session.currentUser,
    channelErrors: state.channels.errors,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createSubscription: (user_id, channel_id) =>
      dispatch(createSubscription(user_id, channel_id)),
    createChannel: channelData =>
      dispatch(createChannel(channelData)),
    requestAllChannelsOfUser: user_id =>
      dispatch(requestAllChannelsOfUser(user_id)),
  }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewChannel)
)
