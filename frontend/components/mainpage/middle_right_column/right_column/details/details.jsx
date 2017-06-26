import React from 'react';
import selector from '../../../../../util/selector';
import { withRouter } from 'react-router-dom';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.timePosting = this.timePosting.bind(this);
  }

  componentDidMount() {
    // this.props.requestAllUsersOfChannel(this.props.currentChannel.id);
  }

  timePosting(date) {
    let monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    let yr, mo, day;

    if (date) {
      yr = parseInt(date.slice(0,4));
      mo = parseInt(date.slice(6, 8));
      day = parseInt(date.slice(8, 10));
      return `${monthNames[mo - 1]} ${day}, ${yr}`;
    }

    return '';

  }

  render() {
    // debugger
    const users = selector(this.props.users);
    const usersCount = users.length;

    const kind = this.props.currentChannel.kind;
    const about = (kind === 'dm') ? `About @${this.props.currentChannel.name}` : `About #${this.props.currentChannel.name}`;
    const details = (kind === 'dm') ? 'Message Details' : 'Channel Details';
    const description = (kind === 'dm') ? 'Message Description' : 'Channel Description';

    return(
      <div className="right-column-detail-div">
        <li className="search-bar"></li>
        <div className="right-column-container">
          <ul>
            <li className="channel-detail-about">{about}</li>
            <li
              className="channel-detail-heading">
              <i className="fa fa-info-circle"></i>
              <span>{details}</span>
            </li>
            <li className='channel-description-heading'>
              {description}
            </li>
            <li className='channel-description-content'>
              {this.props.currentChannel.description}
            </li>
            <li className="channel-detail-created-date">
              Created on {this.timePosting(this.props.currentChannel.created_at)}
            </li>
          </ul>
          <ul className="channel-detail-members-list">
            <li>{usersCount} Members</li>
            {
              users.map( user =>
                <li key={user.id}>
                  <img src={user.image_url}/>
                  {user.username}
                </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
