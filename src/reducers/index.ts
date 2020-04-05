import { combineReducers } from 'redux';
import { login } from './auth/login';

const reducersToBeCombined = {
  login,
};

export default combineReducers({ ...reducersToBeCombined });

export * from './auth/login';