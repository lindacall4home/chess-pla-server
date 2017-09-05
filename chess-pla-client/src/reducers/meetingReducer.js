import {
  FETCH_MEETING_PLAYERS,
  SET_CURRENT_MEETING,
  SET_TIME_IN_OUT,
  SHOW_CHALLENGE_MODAL
 } from '../actions/types';

export default function(state = {
  currentMeeting: {},
  showChallengeModal: false,
  allPlayers: [],
  },
  action){

  switch (action.type){
    case FETCH_MEETING_PLAYERS:

      return {
        ...state,
        allPlayers: action.meetingPlayers
      }

    case SET_CURRENT_MEETING:
      return {
        ...state,
        currentMeeting: action.meeting,
      }

    case SET_TIME_IN_OUT:
      let showChallenge = false;
      const newPlayerArray =  state.allPlayers.map( (player) => {
        if(player.player_id !== action.playerId){
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
        allPlayers: newPlayerArray,
        showChallengeModal: showChallenge
      }

    case SHOW_CHALLENGE_MODAL:
      return{
        ...state,
        showChallengeModal: action.show
      }


    default:
      return state;
  }
}
