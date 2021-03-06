import { all } from 'redux-saga/effects';
import { watchYieldArticle } from './article';
import { watchYieldArticles } from './articles';
import { watchYieldInfo } from './info';
import { watchYieldResume } from './resume';
import { watchYieldSay } from './say';
import { watchYieldCollect } from './collect';


export default function* rootSaga() {
  yield all([,
    watchYieldArticles(),
    watchYieldArticle(),
    watchYieldInfo(),
    watchYieldResume(),
    watchYieldSay(),
    watchYieldCollect()
  ]);
}
