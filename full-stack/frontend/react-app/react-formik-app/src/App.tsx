import React from 'react';
import moment from 'moment'
import './App.scss';

import { SignUpForm } from './forms/sign-up'

const App = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <SignUpForm />
          </div>
        </div>
      </div>
      <footer>
        {moment().format('YYYY')}  &copy; All Rights Reserved. Photon Enterprise
      </footer>
    </React.Fragment>
  )
}

export default App;
