import { connect } from 'react-redux';
import Channels from './channels';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
