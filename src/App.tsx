import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/views/auth/Login';
import Register from './components/views/auth/Register';

import { url } from './constants';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route
          key="login"
          path={url.login}
          component={Login}
        />
        <Route
          key="login"
          path={url.signup}
          component={Register}
        />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
