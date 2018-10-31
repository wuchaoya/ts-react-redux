import { blogFetch } from '../common';
import * as types from '../types';

export const api = 'http://localhost:8000'

export const fetchArticles = (payload: types.IPayload) => blogFetch('/articles', payload)

export const fetchArticle = () => blogFetch('/article')

export const fetchInfo = () => blogFetch('/info')


