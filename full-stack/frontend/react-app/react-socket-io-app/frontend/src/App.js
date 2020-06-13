import React from 'react';
import { Socket } from './socket'
import './App.css';

function App() {
  return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Socket />
          </div>
        </div>
      </div>
  );
}

export default App;
