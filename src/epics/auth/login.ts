import * as rx from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';

import IAuth from '../../api/IAuth';

import { types, loginPending, loginSuccess, loginFailed} from '../../actions';

const login = (action$: any, state$: any, { auth }: { auth: IAuth }) => action$.pipe(
  ofType(types.auth.login),
  rx.exhaustMap((action: any) => Observable.create((observer: any) => {
    observer.next(loginPending());
    try {
      auth.login(action.email, action.password);
      observer.next(loginSuccess());
    } catch (error) {
      observer.next(loginFailed(error));
    } finally {
      observer.complete()
    }
  })),
);

export default login;
