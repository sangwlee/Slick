import { connect } from 'react-redux';
import MainPage from './mainpage';

const mapStateToProps = state => {
  return {
    // currentUser: state.session.currentUser,
    // channels: state.channels.channels
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
