import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
