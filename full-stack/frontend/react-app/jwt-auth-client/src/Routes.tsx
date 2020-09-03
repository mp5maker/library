import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Bye } from './pages/Bye';

export const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <header>
          <div>
            <div>
              <Link to="/">
                Home
              </Link>
            </div>
            <div>
              <Link to="/register">
                Register
              </Link>
            </div>
            <div>
              <Link to="/login">
                Login
              </Link>
            </div>
            <div>
              <Link to="/bye">
                Bye
              </Link>
            </div>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/bye" component={Bye}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}