import {
  FETCH_CURRENT_MEETINGS,
  FETCH_CURRENT_SESSION,
  FETCH_CURRENT_PLAYERS} from '../actions/types';

export default function(state = {
  currentSession: {},
  rankPlayersByAge: true,
  meetingsById: {},
  allMeetings: [],
  allGames: [],
  currentPlayers: []},
  action){

  switch (action.type){
    case FETCH_CURRENT_MEETINGS:

      const meetingsById = action.meetings.reduce((result, meeting) => {
        result[meeting.meeting_id] = meeting
        return result
      }, {})

      console.log('meetingsById ', meetingsById);
      console.log('action.meetings ', action.meetings);

      return {
        ...state,
        meetingsById: meetingsById,
        allMeetings: action.meetings
      }

    case FETCH_CURRENT_SESSION:
      return {
        ...state,
        currentSession: {sessionId: action.sessionData.session_id,
                         sessionName: action.sessionData.session_name},
        rankByAge: action.sessionData[0].game_result === null ? true : false,
        allGames: action.sessionData
      }

    case FETCH_CURRENT_PLAYERS:
      return {
        ...state,
        currentPlayers: action.currentPlayers
      }

    // case ADD_NEW_SESSION_PLAYER:
    //   let players = Array.from(state.currentPlayers);
    //   players.push(action.newPlayer);
    //   return {
    //     ...state,
    //     currentPlayers: players
    //   }

    default:
      return state;
  }
}
