import { InfoAction } from '../actions';
import * as constants from '../constants';

const info = (state: object = {}, action: InfoAction): object => {
  switch (action.type) {
    case constants.REQUEST_INFO:
      return state;
    case constants.RECEIVE_INFO:
      return { ...state, ...action.info };
    default:
      return state;
  }
};

export default info;
