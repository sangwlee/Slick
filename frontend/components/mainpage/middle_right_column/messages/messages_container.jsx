import { connect } from 'react-redux';
import Messages from './messages';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
