import axios from 'axios';
import PairingLogic from '../logic/PairingLogic';
import RankingLogic from '../logic/RankingLogic';
import {
  FETCH_CURRENT_MEETINGS,
  FETCH_CURRENT_SESSION,
  FETCH_CURRENT_PLAYERS,
  FETCH_MEETING_PLAYERS,
  SET_CURRENT_MEETING,
  SET_CURRENT_PLAYER,
  SET_TIME_IN_OUT,
  SHOW_CHALLENGE_MODAL,
  FETCH_MEETING_GAMES,
  SET_GAME_RESULT,
  SET_PLAY_CHALLENGE_GAME,
  SET_SHOW_PLAYERS,
  SHOW_RESULT_MODAL
} from './types';

export const fetchCurrentMeetings = () => async dispatch => {
  const res = await axios.get('/api/meetings/');
  dispatch( { type: FETCH_CURRENT_MEETINGS, meetings: res.data });
};

export const fetchCurrentSession = () => async dispatch => {
  const res = await axios.get('/api/current-session');
  dispatch( { type: FETCH_CURRENT_SESSION, sessionData: res.data });
};

export const fetchCurrentPlayers = () => async dispatch => {
  const res = await axios.get('/api/current-players');
  console.log('in fetchCurrentPlayers ', res.data);
  dispatch( { type: FETCH_CURRENT_PLAYERS, currentPlayers: res.data });
};

export const addNewSessionPlayer = (newPlayer, currentPlayers, rankByAge, history) => async dispatch => {
  // console.log('before new player post: ', newPlayer.first_name);
  // let newPlayerArr = RankingLogic.adjustRanksForNewPlayer(newPlayer, rankByAge, currentPlayers);
  // console.log('after new player post: ', newPlayerArr);
  // await axios.post('/api/current-players', currentPlayers);
  // history.push('/');
  const res = await axios.get('/api/current-players');
  // console.log('after new player fetch: ', res.data);
  dispatch( { type: FETCH_CURRENT_PLAYERS, currentPlayers: res.data });
};

export const setCurrentMeeting = meeting => async dispatch => {
  dispatch( { type: SET_CURRENT_MEETING, meeting: meeting });
};

export const setCurrentPlayer = player => async dispatch => {
  dispatch( { type: SET_CURRENT_PLAYER, player: player });
};

export const fetchMeetingPlayers = meetingId => async dispatch => {
  const res = await axios.get('/api/meeting-players/' + meetingId);
  dispatch( { type: FETCH_MEETING_PLAYERS, meetingPlayers: res.data });
};

export const setTimeInOut = (player, timeIn, timeOut) => async dispatch => {
  // await axios.post('/api/meeting-players/',
  //   {
  //     player: player,
  //     challenge_game: player.challenge_game,
  //     time_in: timeIn,
  //     time_out: timeOut
  //   });
    dispatch( { type: SET_TIME_IN_OUT, player: player,  timeIn: timeIn, timeOut: timeOut});
};

export const showChallengeModal = (show, player) => async dispatch => {
  dispatch( { type: SHOW_CHALLENGE_MODAL, show: show, player: player});
};

export const setPlayChallengeGame = (play, player) => async dispatch => {
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
  await axios.post('/api/meeting-players/', meetingPlayer);
};

export const fetchMeetingGames = meetingId => async dispatch => {
  const res = await axios.get('/api/meeting-games/' + meetingId);
  dispatch( { type: FETCH_MEETING_GAMES, meetingGames: res.data });
};

export const addMeetingGames = (allGames, meetingId) => async dispatch => {
  await axios.post('/api/meeting-games', {meetingId: meetingId, games: allGames});
  const res = await axios.get('/api/meeting-games/' + meetingId);
  dispatch( { type: FETCH_MEETING_GAMES, allGames: res.data });
};

export const setGameResult = (game, result, session, meeting) => async dispatch => {
  console.log('updating game result', meeting.allPlayers);
  let rankingLogic = new RankingLogic();
  let newRankings = rankingLogic.rankPlayersBasedOnGameResult(meeting.allPlayers, game, result, session);
  console.log('in set game result- new rankings/players: ', newRankings, meeting.allPlayers);
  await axios.patch('/api/meeting-games/'  + game.game_id, {game: game, game_result: result, rankings: newRankings });
  console.log('in set game result- after update database'); 
  const res = await axios.get('/api/meeting-players/' + game.meeting_id);
  // const res = await axios.get('/api/current-players');
  console.log('in set game result- after read database: ', res.data[52].first_name, ' ', res.data[52].current_rank);
  dispatch( { type: SET_GAME_RESULT, game: game, game_result: result, players: res.data });
};

export const setShowPlayers = (show) => async dispatch => {
  dispatch( { type: SET_SHOW_PLAYERS, show: show});
};

export const pairPlayers = (meeting, session) => async dispatch => {
  let pairingLogic = new PairingLogic();
  let newPairings = pairingLogic.createPlayerPairings(meeting.allPlayers, session.allGames, meeting.currentMeeting.meeting_id);
  await axios.post('/api/meeting-games/', {games: newPairings, meetingId: meeting.currentMeeting.meeting_id});
  const res = await axios.get('/api/meeting-games/' + meeting.currentMeeting.meeting_id);
  dispatch( { type: FETCH_MEETING_GAMES, meetingGames: res.data });
};

export const showResultModal = (show, game) => async dispatch => {
  dispatch( { type: SHOW_RESULT_MODAL, show: show, game: game});
};
