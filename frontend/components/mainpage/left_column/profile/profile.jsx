import React from 'react';
import Dropdown from 'react-drop-down';
import Modal from 'react-modal';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    const user = this.props.currentUser;
    const welcomeMessage = (user.username === '') ? 'Welcome.' : `Welcome, ${user.firstname}.`;
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

    // debugger

    return(

      <div className="profile-container">
        <ul

          className="welcoming-container">
          <li className="welcoming">
            <span>Welcome</span>
            <i
              onClick={this.openModal}
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
          onRequestClose={this.closeModal}
          isOpen={this.state.modalIsOpen}
          onClose={this.closeModal}>
          <ul className='user-modal'>
            <img src={user.image_url}/>
            <ul>
              <li>{user.firstname} {user.lastname}</li>
              <li>@{user.username}</li>
              <div></div>
              <li id='button' className="user-options">Edit Profile</li>
            </ul>
          </ul>
        </Modal>
      </div>
    );
  }
}

export default Profile;
