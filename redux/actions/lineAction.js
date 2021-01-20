import { SET_LINE_USER, SET_ACTIVITY, UPDATE_USER_ACTIVITIES } from '../types';

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

export const updateUserActivity = (data) => (dispatch) => {
  dispatch({
    type: UPDATE_USER_ACTIVITIES,
    payload: data,
  });
};
