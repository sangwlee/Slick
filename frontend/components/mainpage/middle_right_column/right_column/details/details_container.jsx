import { connect } from 'react-redux';
import Details from './details';

const mapStateToProps = state => ({
  currentChannel: state.currentChannel,
  users: state.users
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
