import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'
import App from './Components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const history = createHistory();

render(
  <HashRouter history={history} >
    <App />
  </HashRouter>,
  document.getElementById('root')
);

