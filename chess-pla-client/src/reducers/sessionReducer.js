import { FETCH_MEETINGS, FETCH_CURRENT_SESSION } from '../actions/types';

export default function(state = { currentSession: '', meetingsById: {}, allMeetings: [] }, action){
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

    default:
      return state;
  }
}
