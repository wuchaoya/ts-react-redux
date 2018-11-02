import { combineReducers } from 'redux';
import article from './article';
import articles from './articles';
import info from './info';
import Resume from './Resume';

const reducer = combineReducers({
  article,
  articles,
  info,
  Resume
})

export default reducer;