import { call, takeEvery, put } from 'redux-saga/effects';
import { REQUEST_INFO, RECEIVE_INFO } from '../constants';
import { fetchInfo } from "../services";

function* yieldInfo(action: any) {
  const info = yield call(fetchInfo, action.id);
  yield put({ type: RECEIVE_INFO, info });
}
export function* watchYieldInfo() {
  yield takeEvery(REQUEST_INFO, yieldInfo);
}
