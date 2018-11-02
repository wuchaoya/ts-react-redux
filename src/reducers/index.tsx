import { combineReducers } from 'redux';
import article from './article';
import articles from './articles';
import info from './info';
import Resume from './Resume';
import say from './say';

const reducer = combineReducers({
  article,
  articles,
  info,
  Resume,
  say
})

export default reducer;