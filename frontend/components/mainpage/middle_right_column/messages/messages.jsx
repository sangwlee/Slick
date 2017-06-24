import React from 'react';
import { withRouter } from 'react-router-dom';
import selector from '../../../../util/selector';
class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.time = this.time.bind(this);
  }

  componentDidMount() {
    // debugger
    this.props.requestAllMessagesOfChannel(parseInt(this.props.match.params.channelId));
  }

  componentWillReceiveProps(nextProps) {
    // debugger
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      let newChannelId = parseInt(nextProps.match.params.channelId);
      this.props.requestAllMessagesOfChannel(newChannelId);
    } else if (JSON.stringify(this.props.messages) !== JSON.stringify(nextProps.messages)) {
      const channelId = parseInt(this.props.location.pathname.slice(6));
      this.props.requestAllMessagesOfChannel(channelId);
    }
  }

  time(date) {
    let yr = parseInt(date.slice(0,4));
    let mo = parseInt(date.slice(6, 8));
    let day = parseInt(date.slice(8, 10));
    let hr = parseInt(date.slice(11,13));
    let min = parseInt(date.slice(14,16));
    let sec = parseInt(date.slice(17, 19));
    let amPm = (hr > 11) ? "PM" : "AM";

    let ago;

    let today = new Date();
    let todayYr = today.getFullYear();
    let todayMo = today.getMonth() + 1;
    let todayDate = today.getDate();
    let todayHr = today.getHours();
    let todayMin = today.getMinutes();
    let todaySec = today.getSeconds();

    if (todayYr - yr > 0) {ago = "more than a year ago";}
    else if (todayMo - mo === 1) {ago = "a month ago";}
    else if (todayMo - mo > 1) {ago = `${today - day} months ago`;}
    else if (todayDate - day === 1) {ago = 'a day ago';}
    else if (todayDate - day > 1) {ago = `${todayDate - day} days ago`;}
    else if (todayHr - hr === 1) {ago = 'an hour ago';}
    else if (todayHr - hr > 1) {ago = `${todayHr - hr} hours ago`;}
    else if (todayMin - min === 1) {ago = `a minute ago`;}
    else if (todayMin - min) {ago = `${todayMin - min} minutes ago`;}
    else if (todaySec - sec) {ago = `${todaySec - sec} seconds ago`;}
    else {ago = 'just now';}

    hr = (hr > 12) ? (hr - 12) : hr;

    let timePosting = `${hr}:${date.slice(14, 16)} ${amPm} | ${ago}`;
    // debugger
    return timePosting;
  }

  render() {
    // debugger
    let users = this.props.users;

    return(
      <div>
        <ul>
          {
            selector(this.props.messages).map( message =>
              <li className='individual-message-container' key={message.id}>
                <img className='profile-pic' src={users[message.user_id].image_url}/>
                <ul className='message-content-container'>
                  <li>
                    <span className='username'>
                      {users[message.user_id].username}
                    </span>
                    <span className="timePosting">
                      {this.time(message.created_at)}
                    </span>
                  </li>
                  <li className="message-content">{message.content}</li>
                </ul>
              </li>
            )
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Messages);
