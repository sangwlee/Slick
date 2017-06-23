import React from 'react';
import selector from '../../../../util/selector';

class DirectMessages extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // debugger
    return(
      <div>
        <ul>
          <h1>DIRECT MESSAGES</h1>
          <ul>
            {
              selector(this.props.directMessages).map(directMessage =>
                <li key={directMessage.id}>#{directMessage.name}</li>
              )
            }
          </ul>
        </ul>
      </div>
    );
  }
}

export default DirectMessages;
