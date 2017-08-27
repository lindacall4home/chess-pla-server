import axios from 'axios';
import {
  FETCH_MEETINGS,
  FETCH_CURRENT_SESSION,
  FETCH_CURRENT_PLAYERS,
  ADD_NEW_PLAYER} from './types';

export const fetchMeetings = () => async dispatch => {
  const res = await axios.get('/api/meetings');
  dispatch( { type: FETCH_MEETINGS, meetings: res.data });
};

export const fetchCurrentSession = () => async dispatch => {
  const res = await axios.get('/api/current-session');
  dispatch( { type: FETCH_CURRENT_SESSION, currentSession: res.data });
};

export const fetchCurrentPlayers = () => async dispatch => {
  const res = await axios.get('/api/current-players');
  dispatch( { type: FETCH_CURRENT_PLAYERS, currentPlayers: res.data });
};

export const addNewPlayer = (newPlayer) => async dispatch => {
  const res = await axios.get('/api/current-players');
  dispatch( { type: ADD_NEW_PLAYER, newPlayer: res.data });
};
