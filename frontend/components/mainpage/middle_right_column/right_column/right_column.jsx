import React from 'react';
import { withRouter } from 'react-router-dom';
import DetailContainer from './details/details_container';
import RepliesContainer from './replies/replies_container';
import { Switch, Route } from 'react-router-dom';
class RightColumn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route exact path='/main/:channel_id/' component={DetailContainer}>
        </Route>
        <Route exact path='/main/:channel_id/message/:message_id' component={RepliesContainer}>
        </Route>
      </Switch>
    )
  }
}

export default withRouter(RightColumn);
