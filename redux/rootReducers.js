import { combineReducers } from 'redux';
import layoutReducer from './reducers/layoutReducer';
import userReducer from './reducers/userReducer';
import navigationReducer from './reducers/navigationReducer';

const rootReducer = combineReducers({
  layout: layoutReducer,
  navigation: navigationReducer,
  user: userReducer,
});

export default rootReducer;
