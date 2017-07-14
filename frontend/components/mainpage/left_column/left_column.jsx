import React from 'react';
import ProfileContainer from './profile/profile_container';
import ChannelsContainer from './channels/channels_container';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class LeftColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='left-column-div'>
        <ul className="left-column-container">
          <li className='profile-container'><ProfileContainer /></li>
          <li className='channels-container'><ChannelsContainer location={this.props.location} /></li>
        </ul>
        <ul className="intro">
          <li>Slick is a clone of Slack.</li>
          <li>For more information, </li>
          <li>please check out below links!</li>
          <li>Or send an email to: </li>
          <li>sangw.lee02@gmail.com</li>
        </ul>
        <div className="personal-info-container">
          <a href="https://sangwlee.github.io/" target="_blank"><i id="button" className="fa fa-globe" aria-hidden="true"></i></a>
          <a href="https://github.com/sangwlee?tab=repositories" target="_blank"><i id="button" className="fa fa-github" aria-hidden="true"></i></a>
          <a href="https://www.linkedin.com/in/sangwlee02/" target="_blank"><i id="button" className="fa fa-linkedin" aria-hidden="true"></i></a>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(
  null,
  mapDispatchToProps
)(LeftColumn));
