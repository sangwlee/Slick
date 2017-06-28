import React from 'react';
import Dropdown from 'react-drop-down';
import Modal from 'react-modal';
import { withRouter } from 'react-router-dom';
import selector from '../../../../util/selector';

const customStyles = {
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

const customStyles2 = {
  overlay : {
    backgroundColor       : 'rgba(255, 255, 255, 0)',
    zIndex                : 1
  },

  content : {
    position              : 'absolute',
    top                   : '48.5%',
    left                  : '21.7%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileModal: false,
      editModal: false,
      id: this.props.currentUser.id,
      email: this.props.currentUser.email,
      firstname: this.props.currentUser.firstname,
      lastname: this.props.currentUser.lastname,
      imageFile: '',
      imageUrl: this.props.currentUser.image_url,
    };

    this.updateFile = this.updateFile.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  handleClick(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user[id]", this.state.id);
    formData.append("user[email]", this.state.email);
    formData.append("user[firstname]", this.state.firstname);
    formData.append("user[lastname]", this.state.lastname);
    formData.append("user[image]", this.state.imageFile);

    // debugger;

    this.props.updateUser(formData)
      .then(this.props.requestAllUsers)
      .then(() => this.props.requestAllUsersOfChannel(parseInt(this.props.location.pathname.slice(6))))
      // .then(() => this.props.requestAllUsersOfChannel(
      //   parseInt(this.props.location.pathname.slice(6))))
      // .then(() => this.props.requestAllMessagesOfChannel(
      //   parseInt(this.props.location.pathname.slice(6))))
      .then(this.closeModal('editModal'))
      .then(this.closeModal('profileModal'))
      // .then(() => this.props.history.push('/main/1'));
      // .then(() => this.props.history.push('/main/1'));
  }

  handleChange(type) {
    return (e) => {
      this.setState({[type]: e.currentTarget.value});
    };
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({imageFile: file, imageUrl: fileReader.result});
    }.bind(this);

    // debugger;

    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      this.setState({imageUrl: '', imageFile: null});
    }
  }


  render() {
    const user = this.props.currentUser;
    const welcomeMessage = (user.username === '') ? 'Welcome.' : `Welcome, ${user.firstname}.`;

    return(

      <div className="profile-container">
        <ul
          className="welcoming-container">
          <li className="welcoming">
            <span>Welcome</span>
            <i
              onClick={this.openModal('profileModal')}
              className="fa fa-cog profile-edit-icon"
              aria-hidden="true"></i>
            <i
              onClick={this.props.logout}
              className="fa fa-sign-out logout-icon"
              aria-hidden="true"></i>
          </li>
          <li className="profile-username">@{this.props.currentUser.username}</li>
        </ul>
        <Modal
          style={customStyles}
          contentLabel="Modal"
          onRequestClose={this.closeModal('profileModal')}
          isOpen={this.state.profileModal}
          onClose={this.closeModal('profileModal')}>
          <ul className='user-modal'>
            <img src={user.image_url}/>
            <ul>
              <li>{user.firstname} {user.lastname}</li>
              <li>@{user.username}</li>
              <li>{user.email}</li>
              <div></div>
              <li
                onClick={this.openModal('editModal')}
                id='button'
                className="user-options">
                Edit Profile
              </li>
              <Modal
                style={customStyles2}
                contentLabel="Modal"
                onRequestClose={this.closeModal('editModal')}
                isOpen={this.state.editModal}
                onClose={this.closeModal('editModal')}>
                <ul className='edit-profile-container'>
                  <li>
                    <input
                      onChange={this.handleChange('firstname')}
                      placeholder={this.state.firstname}
                      type="text">
                    </input>
                    <input
                      onChange={this.handleChange('lastname')}
                      placeholder={this.state.lastname}
                      type="text">
                    </input>
                  </li>
                  <li>
                    <input
                      onChange={this.handleChange('email')}
                      placeholder={this.state.email}
                      type="text">
                    </input>
                  </li>
                  <li>
                    <input
                      onChange={this.updateFile}
                      type="file">
                    </input>
                  </li>
                  <li><img className="sample-image" src={this.state.imageUrl}/></li>
                  <li>
                    <button id='button' onClick={this.handleClick}>Update</button>
                  </li>
                  <li>
                    <ul>
                      {
                        selector(this.props.users.errors).map( error =>
                          <li className="user-edit-errors">{error}.</li>
                        )
                      }
                    </ul>
                  </li>
                </ul>
              </Modal>
            </ul>
          </ul>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Profile);
