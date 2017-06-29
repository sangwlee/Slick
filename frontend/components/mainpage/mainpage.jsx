import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LeftColumn from './left_column/left_column';
import MiddleRightColumn from './middle_right_column/middle_right_column';

import NotificationSystem from 'react-notification-system';

const style = {
  NotificationItem: {
    DefaultStyle: {
      width: "66.5%"
    }
  }
};

class MainPage extends React.Component{
  constructor(props) {
    super(props);

    this._notificationSystem = null;
    this.welcomeNotification = this.welcomeNotification.bind(this);
  }

  welcomeNotification() {
    if (this._notificationSystem) {
      this._notificationSystem.addNotification({
        title: 'WELCOME TO SLICK',
        // message: `Where your communication starts`,
        level: 'success',
        position: 'bl',
      });
    }
  }

  componentWillMount() {
    this.props.requestAllChannelsOfUser(this.props.currentUser.id);
    this.props.requestAllChannels();
    this.props.requestAllUsers();
    this.props.requestCurrentChannel(parseInt(this.props.location.pathname.slice(6)));
  }

  componentDidMount() {
    this.welcomeNotification();
  }

  render() {
    return(
      <div className="main-page-container">
        <NotificationSystem style={style} ref={n => this._notificationSystem = n} />
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
