import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/views/auth/Login';
import Register from './components/views/auth/Register';
import ForgotPassword from './components/views/auth/ForgotPassword';

import { url } from './constants';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route
          key={url.login}
          path={url.login}
          component={Login}
        />
        <Route
          key={url.signup}
          path={url.signup}
          component={Register}
        />
        <Route
          key={url.forgotPassword}
          path={url.forgotPassword}
          component={ForgotPassword}
        />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
