import { SAYAction } from '../actions/say';
import * as containers from '../constants';

const say = (state = { say: [] }, action: SAYAction) => {
  switch (action.type) {
    case containers.REQUEST_SAY:
      return { payload: action.payload };
    case containers.RECEIVE_SAY:
      return {
        payload: action.payload,
        say: action.say,
        total: action.total
      };
    default:
      return state;
  }
};

export default say;
