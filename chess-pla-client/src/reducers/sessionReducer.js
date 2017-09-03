import {
  FETCH_MEETINGS,
  FETCH_CURRENT_SESSION,
  FETCH_CURRENT_PLAYERS,
  ADD_NEW_SESSION_PLAYER } from '../actions/types';

export default function(state = {
  currentSession: '',
  meetingsById: {},
  allMeetings: [],
  currentPlayers: []},
  action){

  switch (action.type){
    case FETCH_MEETINGS:

      const meetingsById = action.meetings.reduce((result, meeting) => {
        result[meeting.id] = meeting
        return result
      }, {})

      return {
        ...state,
        meetingsById: meetingsById,
        allMeetings: action.meetings
      }

      case FETCH_CURRENT_SESSION:
        return {
          ...state,
          currentSession: action.currentSession
        }

      case FETCH_CURRENT_PLAYERS:
        return {
          ...state,
          currentPlayers: action.currentPlayers
        }

      case ADD_NEW_SESSION_PLAYER:
        let players = Array.from(state.currentPlayers);
        players.push(action.newPlayer);
        return {
          ...state,
          currentPlayers: players
        }

    default:
      return state;
  }
}
