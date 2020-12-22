import { USER_STATE_HANDLE, CLEAR_USER } from '../types';

let INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_STATE_HANDLE:
      return { ...state, ...action.payload };
    case CLEAR_USER:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export default userReducer;
