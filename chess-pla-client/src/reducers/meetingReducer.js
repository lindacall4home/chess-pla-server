import {
  FETCH_MEETING_PLAYERS,
  SET_CURRENT_MEETING,
  SET_CURRENT_PLAYER,
  SET_TIME_IN_OUT,
  SHOW_CHALLENGE_MODAL,
  SET_PLAY_CHALLENGE_GAME,
  SET_GAME_RESULT,
  FETCH_MEETING_GAMES,
  SET_SHOW_PLAYERS
 } from '../actions/types';

export default function(state = {
  currentMeeting: {},
  showChallengeModal: false,
  currentPlayer: {},
  allPlayers: [],
  allGames: [],
  showPlayers: true
  },
  action){

  switch (action.type){
    case FETCH_MEETING_PLAYERS:
      console.log('in fetch meeting players ', action.meetingPlayers);
      return {
        ...state,
        allPlayers: action.meetingPlayers
      }

    case SET_CURRENT_MEETING:
      return {
        ...state,
        currentMeeting: action.meeting,
      }

    case SET_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: action.player,
      }

    case SET_TIME_IN_OUT:
      let showChallenge = false;
      const inOutPlayerArray =  state.allPlayers.map( (player) => {
        if(player.player_id !== action.player.player_id){
          return player;
        }
        if(player.challenge_game === null ||
          player.challenge_game === undefined){
          showChallenge = true;
        }
        return {
            ...player,
            time_in: action.timeIn,
            time_out: action.timeOut
        }
      });

      return {
        ...state,
        allPlayers: inOutPlayerArray,
        showChallengeModal: showChallenge,
        currentPlayer: action.player
      }

    case SHOW_CHALLENGE_MODAL:
      return{
        ...state,
        showChallengeModal: action.show,
        currentPlayer: action.player
      }

    case SET_PLAY_CHALLENGE_GAME:
        let updatedPlayer = action.player;
        const challengePlayerArray =  state.allPlayers.map( (player) => {
        if(player.player_id !== action.player.player_id){
          return player;
        }
        updatedPlayer = {
            ...player,
            challenge_game: action.play
        }
        return updatedPlayer;
      });

      return {
        ...state,
        allPlayers: challengePlayerArray,
        showChallengeModal: false,
        currentPlayer: updatedPlayer
      }

    case FETCH_MEETING_GAMES:
      return {
        ...state,
        allGames: action.allGames
      }

    case SET_GAME_RESULT:
        let updatedGame = action.game;
        const newGameArray =  state.allGames.map( (game) => {
        if(game.game_id !== action.game.game_id){
          return game;
        }
        updatedGame = {
            ...game,
            game_result: action.game_result
        }
        return updatedGame;
      });

      return {
        ...state,
        allGames: newGameArray
      }

    case SET_SHOW_PLAYERS:
      return{
        ...state,
        showPlayers: action.show
      }

    default:
      return state;
  }
}
