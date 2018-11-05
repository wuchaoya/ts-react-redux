import { combineReducers } from 'redux';
import article from './article';
import articles from './articles';
import collect from './collect';
import info from './info';
import Resume from './resume';
import say from './say';

const reducer = combineReducers({
  article,
  articles,
  info,
  Resume,
  say,
  collect
});

export default reducer;