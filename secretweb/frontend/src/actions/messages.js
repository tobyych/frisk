import axios from 'axios';
import { createErrMsg, returnErrors } from './err_msgs'
import { GET_MESSAGES, DELETE_MESSAGE, ADD_MESSAGE } from './types';
import { tokenConfig } from './auth'


// GET MESSAGE
export const getMessage = () => (dispatch, getState) => {
  axios.get('/api/messageboard', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_MESSAGES,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};


// DELETE MESSAGE
export const deleteMessage = id => (dispatch, getState) => {
  axios.delete(`/api/messageboard/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createErrMsg({ deleteMessage: 'Message Deleted' }))
      dispatch({
        type: DELETE_MESSAGE,
        payload: id
      })
    }).catch(err => console.log(err.reponse.data));
}


// ADD MESSAGE
export const addMessage = (message) => (dispatch, getState) => {
  axios
    .post("/api/messageboard/", message, tokenConfig(getState))
    .then(res => {
      dispatch(createErrMsg({ addMessage: 'Message Added' }));
      dispatch({
        type: ADD_MESSAGE,
        payload: res.data
      })
    })
    .catch(err => dispatch(returnErrors(
      err.response.data,
      err.response.status
    )));
}
