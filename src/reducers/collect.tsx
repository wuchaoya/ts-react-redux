import { collectAction,} from '../actions/collect';
import * as constants from '../constants';

const collect = (state: object = {}, action: collectAction): object => {
  switch (action.type) {
    case constants.REQUEST_COLLECT:
      return { payload: action.payload };
    case constants.RECEIVE_COLLECT:
      return { ...state, collect: action.collect, total: action.total };
    default:
      return state;
  }
};

export default collect;
