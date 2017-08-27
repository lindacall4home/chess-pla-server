import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import registrationReducer from './registrationReducer';

export default combineReducers({
  session: sessionReducer,
  registration: registrationReducer
});
