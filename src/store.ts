import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { composeWithDevTools } from 'redux-devtools-extension'; //

import rootEpic from './epics';
import rootReducer from './reducers';
import { getCurrentUser } from './actions';

// Dependencies
import Auth from './api/Auth';

import { db } from './config';

const auth = new Auth(db.auth.provader, db.auth.params);
const epicsMiddleware = createEpicMiddleware({
  dependencies: {
    auth,
  },
});

const initState: any = {
  login: {

  },
};

const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(
    applyMiddleware(
      epicsMiddleware,
    ),
  ),
);

epicsMiddleware.run(rootEpic);
store.dispatch(getCurrentUser());

export default store;
