import { SET_LINE_USER, SET_ACTIVITY } from '../types';

export const setLineUser = (data) => (dispatch) => {
  dispatch({
    type: SET_LINE_USER,
    payload: data,
  });
};

export const setActivity = (data) => (dispatch) => {
  dispatch({
    type: SET_ACTIVITY,
    payload: data,
  });
};
