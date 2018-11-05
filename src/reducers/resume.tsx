import { ResumeAction } from '../actions';
import * as constants from '../constants';

const resume = (state: object = {}, action: ResumeAction) => {
  switch (action.type) {
    case constants.REQUEST_RESUME:
      return state;
    case constants.RECEIVE_RESUME:
      return { ...state, ...action.resume };
    default:
      return state;
  }
}

export default resume;