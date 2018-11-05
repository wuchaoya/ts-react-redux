import * as constants from '../constants';

export interface IPayload {
  pageIndex?: number
  pageSize?: number
}

export interface IRequestSAY {
  type: constants.REQUEST_SAY
  payload: IPayload
}

export interface IReceiveSAY {
  type: constants.RECEIVE_SAY
  payload: IPayload
  total: number
  say: object[]
}

export type SAYAction = IRequestSAY | IReceiveSAY

