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
        <div className="personal-info-container">
          <i id="button" className="fa fa-github" aria-hidden="true"></i>
          <i id="button" className="fa fa-envelope" aria-hidden="true"></i>
          <i id="button" className="fa fa-globe" aria-hidden="true"></i>
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
