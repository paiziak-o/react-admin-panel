import types from '../actions/types';

export const auth = (state: any = {}, action: any) => {
  switch (action.type) {
    case types.auth.success:
      return {};

    default:
      return state;
  }
};
