import React from 'react';

import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom'

import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group'

import { NavigationBar } from './Components/NavigationBar'

import Home from './Pages/Home'
import About from './Pages/About'

import './App.css';

const supportsHistory = 'pushState' in window.history;

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter forceRefresh={!supportsHistory}>
        <div>
          <NavigationBar />
          <main>
            <Route
              render={({ location }) => {
                const { pathname } = location
                return (
                  <TransitionGroup>
                    <CSSTransition
                      timeout={{
                        enter: 1000,
                        exit: 1000,
                      }}
                      classNames={`page`}
                      key={pathname}>
                      <Route
                        location={location}
                        render={() => {
                          return (
                            <Switch>
                              <Route
                                exact
                                path="/"
                                component={Home} />
                              <Route
                                exact
                                path="/about"
                                component={About} />
                            </Switch>
                          )
                        }}/>
                    </CSSTransition>
                  </TransitionGroup>
                )
              }}
            />
          </main>
        </div>
      </BrowserRouter>
    )
  }
}
