import * as rx from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ofType } from 'redux-observable';

import IAuth from '../../api/IAuth';

import { types, loginNone } from '../../actions';

const logout = (action$: any, state$: any, { auth }: { auth: IAuth }) => action$.pipe(
  ofType(types.auth.logout),
  rx.exhaustMap(() => Observable.create((observer: any) => {
    auth.logout();
    observer.next(loginNone());
    observer.complete();
  })),
);

export default logout;
