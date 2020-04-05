import { createSelector } from 'reselect';

import types from '../../actions/types';
import { status } from '../../constants';

export const login = (state: any = {
  status: status.none,
}, action: any) => {
  switch (action.type) {
    case types.auth.loginNone:
      return {
        ...state,
        status: status.none,
      };
    case types.auth.loginSuccess:
      return {
        ...state,
        status: status.success,
      };
    case types.auth.loginFailed:
      return {
        ...state,
        error: action.error,
        status: status.failed,
      };
    case types.auth.loginPending:
      return {
        ...state,
        status: status.pending,
      };
    case types.auth.getCurrentUser:
      return {
        ...state,
        status: status.success,
      };

    default:
      return state;
  }
};

export const selectAuth = (state: any) => state.login;

export const selectAuthStatus = createSelector(
  selectAuth,
  a => a.status,
);