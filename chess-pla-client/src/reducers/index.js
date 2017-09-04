import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import {reducer as reduxForm} from 'redux-form';

export default combineReducers({
  session: sessionReducer,
  form: reduxForm
});
