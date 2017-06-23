import React from 'react';
import selector from '../../../../util/selector';

class Channels extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul>
          <h1>CHANNELS</h1>
          <ul>
            {
              selector(this.props.channels).map(channel =>
                <li key={channel.id}>#{channel.name}</li>
              )
            }
          </ul>
        </ul>
      </div>
    );
  }
}

export default Channels;
