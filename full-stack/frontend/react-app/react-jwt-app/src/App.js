import React from 'react';
import './App.scss';
import { history } from './history'
import { auth } from './auth'

import { Login } from './pages/login'
import { EmployeeList } from './pages/employee/List'

import {
  Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) => {
        return auth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }}
    />
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: window.localStorage.getItem('token'),
    }
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute>
              <EmployeeList />
            </PrivateRoute>
          </Switch>
        </div>
      </Router >
    )
  }
}

export default App;
