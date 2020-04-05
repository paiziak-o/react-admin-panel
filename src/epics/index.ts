import { combineEpics } from 'redux-observable';

import login from './auth/login';
import register from './auth/register';
import getCurrentUser from './auth/getCurrentUser';

export default combineEpics(
  login,
  register,
  register,
  getCurrentUser,
);
