import { SET_LOADING, setEnLng, setThLng } from '../types';

const INITIAL_STATE = {
  loading: true,
  lang: 'th',
};

const layoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case setEnLng:
      return { ...state, lang: 'en' };
    case setThLng:
      return { ...state, lang: 'th' };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};

export default layoutReducer;
