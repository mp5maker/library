import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import 'index.scss';
import App from 'App';
import { Todo } from 'Components/Todo'

ReactDOM.render(
  <React.StrictMode>
    <Todo>
      <App />
    </Todo>
  </React.StrictMode>,
  document.getElementById('root')
);