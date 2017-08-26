import { FETCH_MEETINGS } from '../actions/types';

export default function(state = { byId: {}, all: [] }, action){
  switch (action.type){
    case FETCH_MEETINGS:

      const meetingsById = action.meetings.reduce((result, meeting) => {
        result[meeting.id] = meeting
        return result
      }, {})

      return {
        ...state,
        byId: meetingsById,
        all: action.meetings
      }

    default:
      return state;
  }
}
