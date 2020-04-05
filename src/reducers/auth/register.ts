import types from '../../actions/types';
import { status } from '../../constants';

export const auth = (state: any = {
  status: status.none,
}, action: any) => {
  switch (action.type) {
    case types.auth.registerNone:
      return {
        ...state,
        status: status.none,
      };
    case types.auth.registerSuccess:
      return {
        ...state,
        status: status.success,
      };
    case types.auth.registerFailed:
      return {
        ...state,
        error: action.error,
        status: status.failed,
      };
    case types.auth.registerPending:
      return {
        ...state,
        status: status.pending,
      };

    default:
      return state;
  }
};
