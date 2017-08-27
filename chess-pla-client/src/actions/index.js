import axios from 'axios';
import { FETCH_MEETINGS, FETCH_CURRENT_SESSION } from './types';

export const fetchMeetings = () => async dispatch => {
  const res = await axios.get('/api/meetings');
  dispatch( { type: FETCH_MEETINGS, meetings: res.data });
};

export const fetchCurrentSession = () => async dispatch => {
  const res = await axios.get('/api/current-session');
  dispatch( { type: FETCH_CURRENT_SESSION, currentSession: res.data });
};
