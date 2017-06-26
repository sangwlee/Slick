import React from 'react';
import ProfileContainer from './profile/profile_container';
import ChannelsContainer from './channels/channels_container';
import { connect } from 'react-redux';

class LeftColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul className="left-column-container">
          <li className='profile-container'><ProfileContainer /></li>
          <li className='channels-container'><ChannelsContainer /></li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LeftColumn);
