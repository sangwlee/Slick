import React from 'react';
import listNames from './list_names';
import { connect } from 'react-redux';
import { createSubscription } from '../../../../../actions/channels_actions';
import selector from '../../../../../util/selector';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {publicChannels: []};

    selector(this.props.allChannels).forEach(channel => {
      if (channel.kind === 'public') {
        this.state.publicChannels.push(channel);
      }
    });

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const publicChannelsList = this.state.publicChannels.map( channel => {
      return (<li key={channel.id}>#{channel.name}</li>)
    );
  }

  handleChange(e) {
    const currentText = e.target.value;
    const names = [];

    this.props.names.forEach(name => {
      if (currentText.toLowerCase() === name.slice(0, currentText.length).toLowerCase()) {
        names.push(name);
      }
    });

    this.setState({names});
  }
}

const mapStateToProps = state => {
  return {
    allChannels: state.allChannels,
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createSubscription: (user_id, channel_id) =>
      dispatch(createSubscription(user_id, channel_id),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
