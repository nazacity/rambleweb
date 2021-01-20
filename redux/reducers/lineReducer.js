import { SET_LINE_USER, SET_ACTIVITY } from '../types';

let INITIAL_STATE = {
  user: {
    type: 'line',
    lineId: '',
    display_name: '',
    user_picture_url: '',
  },
  activity: {
    activity_picture_url: '',
    title: '',
    sub_title: '',
    description: '',
    location: {
      lat: '',
      lng: '',
      province: '',
      region: '',
      place_name: '',
    },
    actual_date: '',
    register_start_date: '',
    register_end_date: '',
    courses: [],
    timeline: [],
    rules: [],
    shirt_detail: [],
    size: [],
    rules1: {},
    more_detail: {},
    condition: {},
    gifts: [],
  },
};

const lineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LINE_USER:
      return { ...state, user: action.payload };
    case SET_ACTIVITY:
      return { ...state, activity: action.payload };
    default:
      return state;
  }
};

export default lineReducer;
