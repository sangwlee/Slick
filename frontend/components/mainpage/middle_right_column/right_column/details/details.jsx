import React from 'react';
import selector from '../../../../../util/selector';
import { withRouter } from 'react-router-dom';

class Details extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllUsersOfChannel(this.props.currentChannel.id);
  }

  render() {
    const users = selector(this.props.users);
    const usersCount = users.length;
    const usersList = users.map( user => {
      return <li key={user.id}>{user.username}</li>;
    });

    return(
      <div>
        <ul>
          <li>{this.props.currentChannel.name}</li>
          <li>{this.props.currentChannel.description}</li>
          <li>{this.props.currentChannel.created_at}</li>
        </ul>
        <ul>
          <li>{usersCount} Members</li>
          {usersList}
        </ul>
      </div>
    );
  }
}

export default withRouter(Details);
