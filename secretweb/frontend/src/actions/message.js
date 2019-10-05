import axios from 'axios';

import { GET_MESSAGE } from './types';

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
