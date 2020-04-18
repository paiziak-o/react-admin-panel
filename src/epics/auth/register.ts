import * as rx from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';
import IAuth from '../../api/IAuth';

import { types, registerPending, registerFailed, registerSuccess } from '../../actions';

const register = (action$: any, state$: any, { auth }: { auth: IAuth }) => action$.pipe(
  ofType(types.auth.register),
  rx.exhaustMap((action: any) => Observable.create((observer: any) => {
    observer.next(registerPending());
    auth.register(action.email, action.password)
    .than((response: any) => {
      observer.next(registerSuccess());
    })
    .catch((error: any) => {
      observer.next(registerFailed(error));
    })
    .finally(() => {
      observer.complete();
    });
  })),
);

export default register;
