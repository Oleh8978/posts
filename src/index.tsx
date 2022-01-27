import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// component 
import App from './App';

// config
import { Config } from './config/api';

// store
import store from './store'

// styles
import "./assets/scss/main.scss";

import reportWebVitals from './reportWebVitals';

Config.init({
  MAIN_HOST_URL: process.env.REACT_APP_MAIN_URL || ''
})

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
