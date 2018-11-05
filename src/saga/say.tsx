import { all, call, put, takeLatest } from 'redux-saga/effects';
import {  SAYAction } from '../actions/say';
import * as containers from '../constants';
import { getSay } from '../services'

function* yieldSay(action: SAYAction) {
  const response = yield call(getSay, action.payload);
  yield put({ type: containers.RECEIVE_SAY, ...response, payload: action.payload })
}

export function* watchYieldSay() {
  yield all([takeLatest(containers.REQUEST_SAY, yieldSay)])
}
