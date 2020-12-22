import { SET_ADMIN_MENU_INDEX, SET_PARTNER_MENU_INDEX } from '../types';

export const setAdminMenuIndex = (value) => (dispatch) => {
  dispatch({
    type: SET_ADMIN_MENU_INDEX,
    payload: value,
  });
};

export const setPartnerMenuIndex = (value) => (dispatch) => {
  dispatch({
    type: SET_PARTNER_MENU_INDEX,
    payload: value,
  });
};
