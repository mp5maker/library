import React, { Component, Fragment } from 'react';

import Birds from './components/Birds'
import Posts from './components/Posts'

import './App.css';

class App extends Component {

  render() {
    return (
      <Fragment>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css' />
        <div className="container-fluid">
          <div className="row row-eq-height">
            <div className="col">
              <Birds />
            </div>
            <div className="col">
              <Posts />
            </div>
          </div>
        </div>
        <footer>
          <div> &copy; {new Date().getFullYear()}  All Rights Reserved. Photon Development </div>
        </footer>
      </Fragment>
    );
  }
}

export default App;
