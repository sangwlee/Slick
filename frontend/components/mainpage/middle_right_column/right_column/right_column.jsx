import React from 'react';
import { withRouter } from 'react-router-dom';
import DetailContainer from './details/details_container';
import RepliesContainer from './replies/replies_container';

class RightColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.history.location.pathname.includes('message')) {
      return (
        <RepliesContainer />
      );
    } else {
      return (
        <DetailContainer />
      );
    }
  }
}

export default withRouter(RightColumn);
