import { blogFetch } from '../common';
import * as types from '../types';

export const fetchArticles = (payLoad: types.IPayload) => blogFetch('/get-articles', payLoad)

export const fetchInfo = () => blogFetch('/get-info')

export const fetchArticle = (Id: string) => blogFetch('/get-article', { Id })

export const fetchResume = () => blogFetch('/get-resume')

export const getSay = (payLoad: object) => blogFetch('/get-say', payLoad)

export const fetchCollect = (payload: object) => blogFetch('/get-collect', payload)
