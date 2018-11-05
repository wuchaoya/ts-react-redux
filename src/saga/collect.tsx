import { all, call, put, takeEvery } from 'redux-saga/effects'
import { collectAction } from '../actions/collect';
import * as constants from '../constants';
import { fetchCollect } from '../services'

function* yieldCollect(action: collectAction) {
  const { total, collect } = yield call(fetchCollect, action.payload);
  yield put({ type: constants.RECEIVE_COLLECT, total, collect })
}

export function* watchYieldCollect() {
  yield all([takeEvery(constants.REQUEST_COLLECT, yieldCollect)])
}
