import axios from 'axios';

import { GET_MESSAGE, DELETE_MESSAGE, ADD_MESSAGE } from './types';


// GET MESSAGE
export const getMessage = () => dispatch => {
  axios.get('/api/messageboard')
    .then(res => {
      dispatch({
        type: GET_MESSAGE,
        payload: res.data
      })
    }).catch(err => console.log(err));

}


// DELETE MESSAGE
export const deleteMessage = id => dispatch => {
  axios.delete(`/api/messageboard/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_MESSAGE,
        payload: id
      })
    }).catch(err => console.log(err));
}


// ADD MESSAGE
export const addMessage = (message) => dispatch => {
  axios.post("/api/messageboard/", message)
    .then(res => {
      dispatch({
        type: ADD_MESSAGE,
        payload: res.data
      })
    }).catch(err => console.log(err));
}
