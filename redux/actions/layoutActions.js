import { SET_LOADING, setEnLng, setThLng } from '../types';

export const setLoading = (state) => (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: state,
  });
};

export const setEn = () => (dispatch) => {
  dispatch({
    type: setEnLng,
  });
};

export const setTh = () => (dispatch) => {
  dispatch({
    type: setThLng,
  });
};
