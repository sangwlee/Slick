import { connect } from 'react-redux';
import MainPage from './mainpage';
import { requestAllChannelsOfUser } from '../../actions/channels_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestAllChannelsOfUser: user_id => dispatch(requestAllChannelsOfUser(user_id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
