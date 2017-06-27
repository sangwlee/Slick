import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LeftColumn from './left_column/left_column';
import MiddleRightColumn from './middle_right_column/middle_right_column';

class MainPage extends React.Component{
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllChannelsOfUser(this.props.currentUser.id);
    this.props.requestAllChannels();
    this.props.requestAllUsers();
    this.props.requestCurrentChannel(parseInt(this.props.location.pathname.slice(6)));
  }

  render() {
    return(
      <div className="main-page-container">
        <div
          className="main-page-left-column"><LeftColumn />
        </div>
        <div className="main-page-middle-right-column">
          <MiddleRightColumn />
        </div>
      </div>
    );
  }
}

export default withRouter(MainPage);
