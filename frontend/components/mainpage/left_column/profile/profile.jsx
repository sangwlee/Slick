import React from 'react';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // debugger
  }

  render() {
    return(
      <div className="profile-container">
        <ul className="welcoming-container">
          <li className="welcoming">Welcome, {this.props.currentUser.firstname}.</li>
          <li className="profile-username">@{this.props.currentUser.username}</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
