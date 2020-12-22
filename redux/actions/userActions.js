import { USER_STATE_HANDLE, CLEAR_USER } from '../types';
import Cookie from 'js-cookie';

export const userStateHandle = (activeIndex) => (dispatch) => {
  dispatch({
    type: USER_STATE_HANDLE,
    payload: activeIndex,
  });
};

export const signOut = (activeIndex) => (dispatch) => {
  Cookie.remove('accessToken');
  return dispatch({
    type: CLEAR_USER,
  });
};
