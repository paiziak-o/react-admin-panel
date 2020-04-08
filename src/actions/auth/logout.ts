import types from '../types';

export const logout = () : any => ({
  type: types.auth.logout,
});
