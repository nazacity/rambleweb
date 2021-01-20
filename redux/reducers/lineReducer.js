import { SET_LINE_USER, SET_ACTIVITY, UPDATE_USER_ACTIVITIES } from '../types';

let INITIAL_STATE = {
  user: {
    type: 'ramble',
    lineId: 'U83584e6690b2d22b4a604ac227348d9a',
    display_name: 'nazacity',
    user_picture_url:
      'https://profile.line-scdn.net/0hDrAvGHgcG118DzLCHJVkCkBKFTALIR0VBG9WaVgIQ2tWawhZFW5UMl0GQzkBbQleRDtRPVgHRzoG',
    first_name: 'warodom',
    last_name: 'lertthaweedech',
    birthday: '1992-11-10T05:00:00.000+00:00',
    gender: 'male',
    phone_number: '0881493995',
    blood_type: 'O',
    idcard: '1103700943854',
    _id: '6007d9995360333cd0bec99f',
    user_activities: [
      // {
      //   _id: '600807ea4c2a022060c4d4f3',
      //   activity: {
      //     id: '5ffe618090537550cc300db8',
      //     course: {
      //       _id: '5ffbc8c9f6a663257cd466f4',
      //       title: 'ฮาล์ฟมาราธอน 21 กิโลเมตร',
      //       range: 21,
      //       price: 990,
      //       course_picture_url:
      //         'https://ev.runlah.com/api/1/images/st-I6VpAIE-Xvp-_iUTyf5Cd.jpg?size=xl',
      //     },
      //   },
      // },
    ],
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
    announcement: [],
  },
};

const lineReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LINE_USER:
      return { ...state, user: action.payload };
    case SET_ACTIVITY:
      return { ...state, activity: action.payload };
    case UPDATE_USER_ACTIVITIES:
      return {
        ...state,
        user: {
          ...state.user,
          user_activities: [...state.user.user_activities, action.payload],
        },
      };
    default:
      return state;
  }
};

export default lineReducer;
