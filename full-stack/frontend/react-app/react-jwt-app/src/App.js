import React from 'react';
import './App.scss';

import { Login } from './pages/login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router >
    )
  }
}

export default App;
