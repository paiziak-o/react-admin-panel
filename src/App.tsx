import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/view/Login.jsx';

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
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
