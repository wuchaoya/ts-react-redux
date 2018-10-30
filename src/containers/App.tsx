import { REQUEST_INFO } from '../constants';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { App } from '../components';

interface Iinfo {
  info: object
}

const mapStateToProps = (state: Iinfo): object => {
  return {
    info: state.info
  }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    requestInfo: dispatch({type: REQUEST_INFO})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)