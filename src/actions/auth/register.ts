import types from '../types';

export const register = (email: string, password: string) : any => ({
  type: types.auth.register,
  email,
  password,
});

export const registerNone = () : any => ({
  type: types.auth.registerNone,
});

export const registerSuccess = () : any => ({
  type: types.auth.registerSuccess,
});

export const registerPending = () : any => ({
  type: types.auth.registerPending,
});

export const registerFailed = (error: any) : any => ({
  type: types.auth.registerFailed,
  error,
});