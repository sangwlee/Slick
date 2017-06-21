import { connect } from 'react-redux';
import Details from './details';

const mapStateToProps = state => ({
  state
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details);
