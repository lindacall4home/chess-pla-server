import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import meetingReducer from './meetingReducer';
import {reducer as reduxForm} from 'redux-form';

export default combineReducers({
  session: sessionReducer,
  meeting: meetingReducer,
  form: reduxForm
});
