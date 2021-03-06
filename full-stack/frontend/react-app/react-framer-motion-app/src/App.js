import React, { Fragment } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './App.css';

import { Package } from './svg/Package'

import { Header } from './components/Header'
import { Policy } from './components/Policy'
import { Loader } from './components/Loader'

import { Home } from './pages/Home'
import { AboutUs } from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs'

function App() {
  const location = useLocation();

  return (
    <Fragment>
      <Package />
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
      <Loader />
    </Fragment>
  );
}

export default App;
