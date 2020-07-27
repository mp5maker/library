import React from 'react';
import logo from './logo.svg';
import { channels } from './Shared/constants'
import './App.css';

const { ipcRenderer } = window.require('electron');

function App() {
  const [appName, setAppName] = React.useState('')
  const [appVersion, setAppVersion] = React.useState('')

  React.useEffect(() => {
    ipcRenderer.send(channels.APP_INFO);
    ipcRenderer.on(channels.APP_INFO, (event, args) => {
      ipcRenderer.removeAllListeners(channels.APP_INFO);
      setAppName(args.appName)
      setAppVersion(args.appVersion)
    });
  }, [])

  return (
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
          Learn React, { appName } { appVersion }
        </a>
      </header>
    </div>
  );
}

export default App;
