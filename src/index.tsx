import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import i18n from "i18next";
import Backend from 'i18next-http-backend';
import { initReactI18next } from "react-i18next";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .init({
    backend: {
      loadPath: '../lang/{{lng}}.json',
    },
    lng: "en",
    fallbackLng: "en",
    keySeparator: false,

    interpolation: {
      escapeValue: false
    }
  });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
