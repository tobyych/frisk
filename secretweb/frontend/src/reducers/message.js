import { GET_MESSAGE, DELETE_MESSAGE, ADD_MESSAGE } from '../actions/types.js';

const initialState = {
  message: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_MESSAGE:
      return {
        ...state,
        message: action.payload
      }
    case DELETE_MESSAGE:
      return {
        ...state,
        message: state.message.filter(message => message.id !== action.payload)
      };
    case ADD_MESSAGE:
      return {
        ...state,
        message: [...state.message, action.payload]
      }
    default:
      return state;
  }
}