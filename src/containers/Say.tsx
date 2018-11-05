import { connect} from 'react-redux'
import { Dispatch } from 'redux';
import * as constants from '../constants';
import Say from '../components/Say';

const mapStateToProps = ({ say }: any) => ({
  payload: say.payload || { pageIndex: 1, pageSize: 10 },
  say: say.say,
  total: say.total || 0
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchSay: (payload: object = {}) => {
    dispatch({ type: constants.REQUEST_SAY, payload })
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Say)
