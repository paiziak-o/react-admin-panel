import * as rx from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';
import IAuth from '../../api/IAuth';

import { types, loginPending, loginFailed, loginSuccess } from '../../actions';

const register = (action$: any, state$: any, { auth }: { auth: IAuth }) => action$.pipe(
  ofType(types.auth.getCurrentUser),
  rx.exhaustMap(() => Observable.create((observer: any) => {
    observer.next(loginPending());
    auth.getCurrentUser()
      .then(() => {
        observer.next(loginSuccess());
      })
      .catch((error: any) => {
        observer.next(loginFailed(error));
    });
  })),
);

export default register;
