import { SET_ADMIN_MENU_INDEX, SET_PARTNER_MENU_INDEX } from '../types';

const INITIAL_STATE = {
  adminMenuIndex: 0,
  partnerMenuIndex: 0,
};

const navigationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ADMIN_MENU_INDEX:
      return { ...state, adminMenuIndex: action.payload };
    case SET_PARTNER_MENU_INDEX:
      return { ...state, partnerMenuIndex: action.payload };
    default:
      return state;
  }
};

export default navigationReducer;
