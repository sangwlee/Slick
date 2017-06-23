import React from 'react';
import ProfileContainer from './profile/profile_container';
import ChannelsContainer from './channels/channels_container';

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

export default LeftColumn;
