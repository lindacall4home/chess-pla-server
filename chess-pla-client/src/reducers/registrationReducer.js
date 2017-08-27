import {
  ADD_NEW_PLAYER } from '../actions/types';

export default function(state = {
  newPlayer: {}
  },
  action){

  switch (action.type){
    case ADD_NEW_PLAYER:

      return {
        ...state,
        newPlayer: action.newPlayer
      }

    default:
      return state;
  }
}
