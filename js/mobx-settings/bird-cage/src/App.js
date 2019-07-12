import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react'

import logo from './logo.svg';
import './App.css';

@inject('BirdStore')
@observer
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bird: ""
    }
  }

  onChange = ({event}) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = ({event} = {}) => {
    event.preventDefault();
    this.props.BirdStore.addBird(this.state.bird)
  }

  removeBird = ({event, bird} = {}) => {
    this.props.BirdStore.removeBird(bird)
  }

  render() {
    const { BirdStore } = this.props;

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
            <div>
                <form onSubmit={(event) => this.onSubmit({event})}>
                  <input
                    onChange={(event) => this.onChange({event})}
                    name="bird"
                    type="text"
                    placeholder="Add Bird"/>
                  <button>
                    Add Bird
                  </button>
                </form>
                <ul>
                  {
                    BirdStore.birds.map((bird, index) => (
                      <li key={index} >
                        <span>
                          { bird }
                        </span>
                        <button onClick={(event) => this.removeBird({event, bird})}>
                          &times;
                        </button>
                      </li>
                    ))
                  }
                </ul>
            </div>
          </header>
        </div>
      </Fragment>
    );
  }
}

export default App;
