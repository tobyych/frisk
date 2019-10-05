import { GET_MESSAGE } from '../actions/types.js';

const initialState = {
  messages: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        leads: action.payload
      }
    default:
      return state;
  }
}