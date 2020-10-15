import React from "react";
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from "history";

import Figma from 'pages/Figma'
import Showcase from 'pages/Showcase'
import "App.scss";

const history = createBrowserHistory()

function App() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={"/"} component={Figma}/>
          <Route exact path={"/showcase"} component={Showcase}/>
        </Switch>
      </Router>
    );
}

export default App;
