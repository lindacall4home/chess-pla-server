import {
  FETCH_MEETING_PLAYERS,
  SET_CURRENT_MEETING,
  // SET_CURRENT_MEETING_PLAYER,
  SET_TIME_IN_OUT
 } from '../actions/types';

export default function(state = {
  currentMeeting: '',
  // currentMeetingPlayer: {},
  //playersById: {},
  allPlayers: [],
  },
  action){

  switch (action.type){
    case FETCH_MEETING_PLAYERS:

      // const playersById = action.meetingPlayers.reduce((result, player) => {
      //   result[player.id] = player
      //   return result
      // }, {})

      return {
        ...state,
        //playersById: playersById,
        allPlayers: action.meetingPlayers
      }

    case SET_CURRENT_MEETING:
      return {
        ...state,
        currentMeeting: action.meetingId,
      }

    case SET_TIME_IN_OUT:

      const newPlayerArray =  state.allPlayers.map( (player) => {
        if(player.player_id !== action.playerId){
          return player;
        }
        return {
            ...player,
            time_in: action.timeIn,
            time_out: action.timeOut
        }
      });

      console.log('in set in out in reducer ', newPlayerArray);

      return {
        ...state,
        allPlayers: newPlayerArray
      }

    default:
      return state;
  }
}
