import { combineReducers } from 'redux';
import messages from './messages';
import errors from './errors';
import err_msgs from './err_msgs'
import auth from './auth'

export default combineReducers({
  messages,
  errors,
  err_msgs,
  auth
});