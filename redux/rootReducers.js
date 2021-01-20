import { combineReducers } from 'redux';
import layoutReducer from './reducers/layoutReducer';
import userReducer from './reducers/userReducer';
import navigationReducer from './reducers/navigationReducer';
import lineReducer from './reducers/lineReducer';

const rootReducer = combineReducers({
  layout: layoutReducer,
  navigation: navigationReducer,
  user: userReducer,
  line: lineReducer,
});

export default rootReducer;
