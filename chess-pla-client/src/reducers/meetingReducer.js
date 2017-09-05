import {
  FETCH_MEETING_PLAYERS,
  SET_CURRENT_MEETING
 } from '../actions/types';

export default function(state = {
  currentMeeting: '',
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
        currentMeeting: action.meetingId,
      }

    default:
      return state;
  }
}
