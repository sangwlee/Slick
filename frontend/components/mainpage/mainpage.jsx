import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class MainPage extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Welcome, {this.props.currentUser.firstname}!</h1>
      </div>
    );
  }
}

export default withRouter(MainPage);
