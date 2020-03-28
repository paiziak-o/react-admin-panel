import { combineReducers } from 'redux';
import { auth } from './auth';

const reducersToBeCombined = {
  auth,
};

export default combineReducers({ ...reducersToBeCombined });
