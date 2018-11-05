import * as constants from '../constants';
import * as types from '../types';

export interface IRequestArticles {
  type: constants.REQUEST_ARTICLES
  payload: types.IPayload;
}

export interface IReceiveArticles {
  type: constants.RECEIVE_ARTICLES
  payload: types.IPayload;
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

export interface IRequestResume {
  type: constants.REQUEST_RESUME
}

export interface IReceiveResume {
  type: constants.RECEIVE_RESUME
  resume: object
}

export type ArticleAction = IRequestArticle | IReceiveArticle;
export type ArticlesAction = IRequestArticles | IReceiveArticles;
export type InfoAction = IRequestInfo | IReceiveInfo;
export type ResumeAction = IRequestResume | IReceiveResume



