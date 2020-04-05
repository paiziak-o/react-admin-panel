import types from '../types';

export const login = (email: string, password: string) : any => ({
  type: types.auth.login,
  email,
  password,
});

export const loginNone = () : any => ({
  type: types.auth.loginNone,
});

export const loginSuccess = () : any => ({
  type: types.auth.loginSuccess,
});

export const loginPending = () : any => ({
  type: types.auth.loginPending,
});

export const getCurrentUser = () : any => ({
  type: types.auth.getCurrentUser,
});

export const loginFailed = (error: any) : any => ({
  type: types.auth.loginFailed,
  error,
});
