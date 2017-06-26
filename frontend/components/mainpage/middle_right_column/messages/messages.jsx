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
    // } else if (JSON.stringify(this.props.messages) !== JSON.stringify(nextProps.messages)) {
    //   debugger
    //   const channelId = parseInt(this.props.location.pathname.slice(6));
    //   this.props.requestAllMessagesOfChannel(channelId);
    }
  }

  time(date) {
    let monthNames = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30,
      7:31, 8:31, 9:30, 10:31, 11:30, 12:31
    };

    let yr = parseInt(date.slice(0,4));
    let mo = parseInt(date.slice(6, 8));
    let day = parseInt(date.slice(8, 10));
    let hr = parseInt(date.slice(11,13));
    let min = parseInt(date.slice(14,16));
    let sec = parseInt(date.slice(17, 19));
    let amPm = (hr > 11) ? "PM" : "AM";

    if (yr % 4 === 0) {monthNames[2] = 29;}

    let ago;

    let today = new Date();
    let todayYr = today.getFullYear();
    let todayMo = today.getMonth() + 1;
    let todayDate = today.getDate();
    let todayHr = today.getHours();
    let todayMin = today.getMinutes();
    let todaySec = today.getSeconds();

    if (todayYr - yr > 0) {ago = "more than a year ago";}
    else if (todayMo - mo === 1 && todayMo >= mo) {ago = "a month ago";}
    else if (Math.abs(todayMo - mo) > 1)
    {ago = `${((todayMo - mo < 0) ? (todayMo - mo + 12) : (todayMo - mo))} months ago`;}
    else if (todayDate - day === 1 && todayHr >= hr) {ago = 'a day ago';}
    else if (Math.abs(todayDate - day) > 1)
    {ago = `${((todayDate - day < 0) ? (today - day + monthNames[mo]) : (today - day))} days ago`;}
    else if (todayHr - hr === 1 && todayMin >= min) {ago = 'an hour ago';}
    else if (Math.abs(todayHr - hr) > 1)
    {ago = `${((todayHr - hr < 0) ? (todayHr - hr + 24) : (todayHr - hr))} hours ago`;}
    else if (todayMin - min === 1 && todaySec >= sec) {ago = `a minute ago`;}
    else if (Math.abs(todayMin - min) > 1)
    {ago = `${((todayMin - min < 0) ? (todayMin - min + 60) : (todayMin - min))} minutes ago`;}
    else if (todaySec - sec)
    {ago = `${((todaySec - sec < 0) ? (todaySec - sec + 60) : (todaySec - sec))} seconds ago`;}
    else {ago = 'just now';}

    hr = (hr > 12) ? (hr - 12) : hr;

    if (amPm === "AM" && hr === 0) {
      hr = 12;
    }

    let timePosting = `${hr}:${date.slice(14, 16)} ${amPm} | ${ago}`;
    return timePosting;
  }

  render() {
    // debugger
    let users = this.props.users;

    return(
      <div>
        <ul>
          {
            selector(this.props.messages).map( message => {
              return (

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
            )
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(Messages);
