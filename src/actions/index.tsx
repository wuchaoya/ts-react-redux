import * as constants from '../constants';

export interface IRequestArticle {
  type: constants.REQUEST_ARTICLE;
}

export interface IReceiveArticle {
  type: constants.RECEIVE_ARTICLE;
  article: Array<object>;
}

export interface IRequestInfo {
  type: constants.REQUEST_INFO;
}

export interface IReceiveInfo {
  type: constants.RECEIVE_INFO;
  info: object;
}

export type InfoAction = IRequestInfo | IReceiveInfo;

export type ArticleAction = IRequestArticle | IReceiveArticle;

