import React from 'react';
import { withRouter } from 'react-router-dom';
import selector from '../../../../util/selector';
class Messages extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      let newChannelId = parseInt(nextProps.match.params.channelId);
      this.props.requestAllMessagesOfChannel(newChannelId);
    } else if (JSON.stringify(this.props.messages) !== JSON.stringify(nextProps.messages)) {
      const channelId = parseInt(this.props.location.pathname.slice(6));
      this.props.requestAllMessagesOfChannel(channelId);
    }
  }

  render() {
    return(
      <div>
        <ul>
          {
            selector(this.props.messages).map( message =>
              <li key={message.id}>
                <ul>
                  <li>{message.user_id}</li>
                  <li>{message.content}</li>
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
