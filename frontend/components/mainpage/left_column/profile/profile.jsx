import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="profile-container">
        <span>Welcome, {this.props.currentUser.firstname}.</span>
        <br/>
        <span>@{this.props.currentUser.username}</span>
      </div>
    );
  }
}

export default Profile;
