import { connect } from 'react-redux';
import DirectMessages from './direct_messages';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessages);
