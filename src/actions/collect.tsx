import * as containers from '../constants';

export interface IPayload {
  pageIndex?: number;
  pageSize?: number;
  timeFile?: boolean;
  id?: string;
}

export interface IAddCollect {
  type: containers.ADD_COLLECT;
  payload: object;
}

export interface IRequestCollect {
  type: containers.REQUEST_COLLECT;
  payload: IPayload;
}

export interface IDeleteCollect {
  type: containers.DELETE_COLLECT;
  payload: object;
}

export interface IReceiveCollect {
  type: containers.RECEIVE_COLLECT;
  payload: IPayload;
  total: number;
  collect: object[];
}

export type collectAction = IRequestCollect | IReceiveCollect;

