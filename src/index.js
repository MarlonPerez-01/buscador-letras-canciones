import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import './fontello/css/fontello.css';
import './scss/index.scss';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

serviceWorker.unregister();
