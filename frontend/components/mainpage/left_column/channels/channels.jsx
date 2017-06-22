import React from 'react';

class Channels extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    // debugger
  }

  componentDidMount() {
    this.props.requestAllChannelsOfUser(this.props.currentUser.id);
  }

  render() {
    debugger
    return(
      <div>
        <ul>
          <h1>CHANNELS</h1>
          <ul>
            {
              this.props.channels.map(channel =>
                <li key={channel.id}>{channel.name}</li>
              )
            }
          </ul>
        </ul>
      </div>
    );
  }
}

export default Channels;
