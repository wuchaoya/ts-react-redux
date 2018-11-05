import { call, takeEvery, put } from 'redux-saga/effects';
import { RECEIVE_ARTICLE, REQUEST_ARTICLE } from '../constants';
import { fetchArticle } from '../services';
import { ArticleAction } from '../actions';


function* yieldArticle(action: ArticleAction) {
  const article = yield call(fetchArticle, action.Id);
  yield put({ type: RECEIVE_ARTICLE, article })
}

export function* watchYieldArticle() {
  yield takeEvery(REQUEST_ARTICLE, yieldArticle)
}
