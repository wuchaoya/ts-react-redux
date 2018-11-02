import { call, put, takeEvery } from 'redux-saga/effects';
import * as constants from '../constants';
import { fetchResume } from '../services'

function* yieldResume() {
  const resume = yield call(fetchResume)
  yield put({ type: constants.RECEIVE_RESUME, resume })
}
export function* watchYieldResume() {
  yield takeEvery(constants.REQUEST_RESUME, yieldResume)
}
