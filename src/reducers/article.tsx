import { ArticleAction } from '../actions';
import * as constants from '../constants';

const article = (state: Array<any> = [], action: ArticleAction): object => {
  switch (action.type) {
    case constants.REQUEST_ARTICLE:
      return state;
    case constants.RECEIVE_ARTICLE:
      return [...state, ...action.article];
    default:
      return state;
  }
};

export default article;
