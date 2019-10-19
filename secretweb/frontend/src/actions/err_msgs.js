import { CREATE_ERROR_MESSAGE, GET_ERROR_MESSAGES, GET_ERRORS } from './types';

// CREATE ERROR MESSAGE
export const createErrMsg = msg => {
  return {
    type: CREATE_ERROR_MESSAGE,
    payload: msg
  };
};

// RETURN ERRORS
export const returnErrors = (msg, status) => {
  const errors = {
    msg, status
  }
  return {
    type: GET_ERRORS,
    payload: errors
  };
};