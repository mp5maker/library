import React, { Fragment } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css';

import { Header } from './components/Header'
import { Policy } from './components/Policy'

import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch
          key={location.key}
          location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/contact-us" component={ContactUs} />
        </Switch>
      </AnimatePresence>
      <Policy />
    </Fragment>
  );
}

export default App;
