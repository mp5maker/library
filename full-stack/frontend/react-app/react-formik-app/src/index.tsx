import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.css';

/* Font Awesome Imports */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

/* Custom CSS */
import './index.scss';

/* App */
import App from './App';

library.add(faCheckSquare, faCoffee)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
