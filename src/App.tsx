import React, { FC } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/views/auth/Login';
import Register from './components/views/auth/Register';
import ForgotPassword from './components/views/auth/ForgotPassword';
import Dashboard from './components/views/dashboard/Dashboard';

import anonymOnly from './components/hoc/AnonymOnly';
import requiresAuth from './components/hoc/RequiresAuth';

import { url } from './constants';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const AnonymLogin: FC = anonymOnly(Login);
const AnonymRegister: FC = anonymOnly(Register);
const AnonymForgotPassword: FC = anonymOnly(ForgotPassword);

const AuthDashboard: FC = requiresAuth(Dashboard);

const App: React.FunctionComponent = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route
          key={url.login}
          path={url.login}
          component={AnonymLogin}
        />
        <Route
          key={url.signup}
          path={url.signup}
          component={AnonymRegister}
        />
        <Route
          key={url.forgotPassword}
          path={url.forgotPassword}
          component={AnonymForgotPassword}
        />
        <Route
          key={url.dashboard}
          path={url.dashboard}
          component={AuthDashboard}
        />
        <Route
          key={url.root}
          path={url.root}
          component={AnonymLogin}
        />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
