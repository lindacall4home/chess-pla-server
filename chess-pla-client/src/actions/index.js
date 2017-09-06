import axios from 'axios';
import {
  FETCH_CURRENT_MEETINGS,
  FETCH_CURRENT_SESSION,
  FETCH_CURRENT_PLAYERS,
  ADD_NEW_SESSION_PLAYER,
  FETCH_MEETING_PLAYERS,
  SET_CURRENT_MEETING,
  SET_CURRENT_PLAYER,
  UPDATE_MEETING_PLAYER,
  SET_TIME_IN_OUT,
  SHOW_CHALLENGE_MODAL,
  FETCH_MEETING_GAMES,
  SET_GAME_RESULT,
  SET_PLAY_CHALLENGE_GAME,
  SET_SHOW_PLAYERS
} from './types';

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

export const setCurrentMeeting = meeting => async dispatch => {
  dispatch( { type: SET_CURRENT_MEETING, meeting: meeting });
};

export const setCurrentPlayer = player => async dispatch => {
  dispatch( { type: SET_CURRENT_PLAYER, player: player });
};

export const fetchMeetingPlayers = meetingId => async dispatch => {
  const res = await axios.get('/api/meetings/' + meetingId);
  console.log('fetch meeting players', res.data);
  dispatch( { type: FETCH_MEETING_PLAYERS, meetingPlayers: res.data });
};

export const setTimeInOut = (player, timeIn, timeOut) => async dispatch => {
  console.log('set time in/out ', player, timeIn, timeOut);
  await axios.post('/api/meeting-players/',
    {
      player: player,
      challenge_game: player.challenge_game,
      time_in: timeIn,
      time_out: timeOut
    });
    dispatch( { type: SET_TIME_IN_OUT, player: player,  timeIn: timeIn, timeOut: timeOut});
};

export const showChallengeModal = (show, player) => async dispatch => {
  console.log('show challenge modal ', show, player);
  dispatch( { type: SHOW_CHALLENGE_MODAL, show: show, player: player});
};

export const setPlayChallengeGame = (play, player) => async dispatch => {
  console.log('set play challenge game ', play, player);
  await axios.post('/api/meeting-players/',
    {
      player: player,
      challenge_game: play,
      time_in: player.time_in,
      time_out: player.time_out
    });
  dispatch( { type: SET_PLAY_CHALLENGE_GAME, play: play, player: player});
};

export const updateMeetingPlayer = (meetingPlayer) => async dispatch => {
  console.log('update meeting player ', meetingPlayer);
  await axios.post('/api/meeting-players/', meetingPlayer);
  // dispatch( { type: UPDATE_MEETING_PLAYER, meetingPlayer: meetingPlayer});
};

export const fetchMeetingGames = meetingId => async dispatch => {
  const res = await axios.get('/api/meeting-games/' + meetingId);
  console.log('fetch meeting games', res.data);
  dispatch( { type: FETCH_MEETING_GAMES, allGames: res.data });
};

export const addMeetingGames = (allGames, meetingId) => async dispatch => {
  await axios.post('/api/meeting-games', allGames);
  const res = await axios.get('/api/meeting-games/' + meetingId);
  dispatch( { type: FETCH_MEETING_GAMES, allGames: res.data });
};

export const setGameResult = (game, result) => async dispatch => {
  console.log('set game result ', game, result);
  await axios.patch('/api/meeting-games/', {game: game, game_result: result});
  dispatch( { type: SET_GAME_RESULT, game: game, game_result: result});
};

export const setShowPlayers = (show) => async dispatch => {
  console.log('set show players ', show);
  dispatch( { type: SET_SHOW_PLAYERS, show: show});
};
