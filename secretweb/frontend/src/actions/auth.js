import axios from 'axios';
import { returnErrors } from './err_msgs'

import { USER_LOADING, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL } from './types';

// CHECK TOKEN and LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // User Loading
  dispatch({ type: USER_LOADING });

  // get token from state
  const token = getState().auth.token;

  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // check token, add to config if exists
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  axios.get('/api/auth/user', config)
    .then(res => {
      dispatch({
        type: USER_LOADED,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: AUTH_ERROR
      })
    });
}

// LOGIN USER
export const login = (username, password) => dispatch => {
  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // request body
  const body = JSON.stringify({ username, password });

  axios
    .post('/api/auth/login', body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// REGISTER USER
export const register = ({ username, password, email }) => dispatch => {
  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // request body
  const body = JSON.stringify({ username, password, email });

  axios
    .post('/api/auth/register', body, config)
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type: REGISTER_FAIL
      });
    });
};


// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post('/api/auth/logout/', null, tokenConfig(getState))
    .then(res => {
      dispatch({
        type: LOGOUT_SUCCESS
      })
    })
    .catch(err => {
      console.log(err)
      dispatch(returnErrors(err.response.data, err.response.status))
    });
}

export const tokenConfig = getState => {
  // get token from state
  const token = getState().auth.token;

  // headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // check token, add to config if exists
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  return config;
};