import React from 'react';

import DetailContainer from './details/details_container';
import RepliesContainer from './replies/replies_container';

class RightColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.column_type === 'details') {
      return (
        <DetailContainer />
      );
    } else if (this.props.column_type === 'replies') {
      return (
        <RepliesContainer />
      );
    }
  }
}

export default RightColumn;
