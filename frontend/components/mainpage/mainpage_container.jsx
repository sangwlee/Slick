import { connect } from 'react-redux';
import MainPage from './mainpage';

const mapStateToProps = state => {
  // debugger
  return ({
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
