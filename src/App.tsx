import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './components/view/Login.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route
          key="login"
          path="/login"
          component={Login}
        />
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
