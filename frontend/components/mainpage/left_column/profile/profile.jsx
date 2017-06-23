import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  render() {
    return(
      <div className="profile-container">
        <ul>
          <li>Welcome, {this.props.currentUser.firstname}.</li>
          <li>@{this.props.currentUser.username}</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
