import axios from 'axios';
import { FETCH_MEETINGS } from './types';

export const fetchMeetings = () => async dispatch => {
  const res = await axios.get('/api/meetings');
  dispatch( { type: FETCH_MEETINGS, meetings: res.data });
};
