import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import * as constants from '../constants';
import Collect from '../components/Collect';

interface ICollect {
  collect: object[]
  payload: object
  total: number
}

interface IState {
  collect: ICollect
}

const mapStateToProps = ({ collect }: IState) => ({
  collect: collect.collect,
  payload: collect.payload || { pageIndex: 1, pageSize: 16 },
  total: collect.total || 0
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteCollect: (id: string) => {
    dispatch({ type: constants.DELETE_COLLECT, payload: { _id: id } })
  },
  fetchCollect: (payload: object = { pageIndex: 1, pageSize: 16 }) => {
    dispatch({ type: constants.REQUEST_COLLECT, payload })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Collect)
