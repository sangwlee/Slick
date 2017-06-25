import React from 'react';
import selector from '../../../../util/selector';
import { Link, Route, withRouter, NavLink } from 'react-router-dom';

// import Modal from 'react-modal';
// import NewChannel from './new_channel';

// const appElement = document.getElementByid('root');

// const customStyles = {
// content : {
//   top                   : '50%',
//   left                  : '50%',
//   right                 : 'auto',
//   bottom                : 'auto',
//   marginRight           : '-50%',
//   transform             : 'translate(-50%, -50%)'
// }
// };

class Channels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalIsOpen: false };

    this.requestAllUsersOfChannel = this.requestAllUsersOfChannel.bind(this);
    // this.openModal = this.openModal.bind(this);
    // this.afterOpenModal = this.afterOpenModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
  }

  // openModal() {
  //   this.setState({modalIsOpen: true});
  // }
  //
  // afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }
  //
  // closeModal() {
  //   this.setState({modalIsOpen: false});
  // }

  requestAllUsersOfChannel(channel_id) {
    return () => {
      this.props.requestAllUsersOfChannel(channel_id);
    };
  }

  render() {
    return(
      <div>
        <ul>
          <h1
            className="channel-directmessage-heading">
            <span className="channels-icon">CHANNELS</span>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </h1>
          <ul className="channel-list channel-unique">
            {
              selector(this.props.channels).map(channel =>
                <li
                  onClick={this.requestAllUsersOfChannel(channel.id)}
                  key={channel.created_at}>
                  <NavLink
                    exact to={`/main/${channel.id}`}
                    activeClassName="selected">
                    <span className="pound-sign">#</span>
                    {"  " + channel.name}
                  </NavLink>
                </li>
              )
            }
          </ul>
        </ul>
        <ul>
          <h1 className="channel-directmessage-heading">
            <span className="dm-icon">DIRECT MESSAGES</span>
            <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </h1>
          <ul className="channel-list">
            {
              selector(this.props.directMessages).map(directMessage =>
                <li
                  onClick={this.requestAllUsersOfChannel(directMessage.id)}
                  key={directMessage.created_at}>
                  <NavLink
                    exact to={`/main/${directMessage.id}`}
                    activeClassName="selected">
                    <span className="pound-sign">@</span>
                    {"  " + directMessage.name}
                  </NavLink>
                </li>
              )
            }
          </ul>
        </ul>

      </div>
    );
  }
}

// ReactDom.render(<App />, appElement);
export default withRouter(Channels);
