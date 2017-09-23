import { combineReducers } from 'redux';
import authReducer from './authReducer';
import sessionReducer from './sessionReducer';
import meetingReducer from './meetingReducer';
import {reducer as reduxForm} from 'redux-form';

export default combineReducers({
  auth: authReducer,
  session: sessionReducer,
  meeting: meetingReducer,
  form: reduxForm
});
