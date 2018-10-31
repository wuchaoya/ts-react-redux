import * as constants from '../constants';

export interface IRequestArticles {
  type: constants.REQUEST_ARTICLES
  pageIndex: number
  pageSize: number
}

export interface IReceiveArticles {
  type: constants.RECEIVE_ARTICLES
  pageIndex: number
  pageSize: number
  total: number
  articles: object[]
}

export interface IRequestInfo {
  type: constants.REQUEST_INFO
}

export interface IReceiveInfo {
  type: constants.RECEIVE_INFO
  info: object
}

export interface IRequestArticle {
  type: constants.REQUEST_ARTICLE
  Id: string
}

export interface IReceiveArticle {
  type: constants.RECEIVE_ARTICLE
  Id: string
  article: object[]
}

export type ArticleAction = IRequestArticle | IReceiveArticle;
export type ArticlesAction = IRequestArticles | IReceiveArticles;
export type InfoAction = IRequestInfo | IReceiveInfo;


