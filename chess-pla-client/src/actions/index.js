import axios from 'axios';
import {
  FETCH_CURRENT_MEETINGS,
  FETCH_CURRENT_SESSION,
  FETCH_CURRENT_PLAYERS,
  ADD_NEW_SESSION_PLAYER,
  FETCH_MEETING_PLAYERS,
  SET_CURRENT_MEETING} from './types';

export const fetchCurrentMeetings = () => async dispatch => {
  const res = await axios.get('/api/meetings/');
  console.log('meetings', res.data);
  dispatch( { type: FETCH_CURRENT_MEETINGS, meetings: res.data });
};

export const fetchCurrentSession = () => async dispatch => {
  const res = await axios.get('/api/current-session');
  console.log('session ', res.data);
  dispatch( { type: FETCH_CURRENT_SESSION, currentSession: res.data });
};

export const fetchCurrentPlayers = () => async dispatch => {
  const res = await axios.get('/api/current-players');
  console.log('session players', res.data);
  dispatch( { type: FETCH_CURRENT_PLAYERS, currentPlayers: res.data });
};

export const addNewSessionPlayer = (newPlayer, history) => async dispatch => {
  const res = await axios.post('/api/current-players', newPlayer);
  history.push('/');
  dispatch( { type: ADD_NEW_SESSION_PLAYER, newPlayer: res.data });
};

export const setCurrentMeeting = meetingId => async dispatch => {
  dispatch( { type: SET_CURRENT_MEETING, meetingId: meetingId });
};

export const fetchMeetingPlayers = meetingId => async dispatch => {
  const res = await axios.get('/api/meetings/' + meetingId);
  console.log('meeting players', res.data);
  dispatch( { type: FETCH_MEETING_PLAYERS, meetingPlayers: res.data });
};
