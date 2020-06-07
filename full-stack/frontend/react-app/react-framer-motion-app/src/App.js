import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

import { Header } from './components/Header'

import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
