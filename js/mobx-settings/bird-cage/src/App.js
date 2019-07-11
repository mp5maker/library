import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react'

import logo from './logo.svg';
import './App.css';

@inject('BirdStore')
@observer
class App extends Component {
  render() {
    const { BirdStore } = this.props;
    console.log(this.props)

    return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {/* It does need have () parenthesis becuase it has accessor */}
            <div>You have {BirdStore.birdCount} birds</div>
          </header>
        </div>
      </Fragment>
    );
  }
}

export default App;
