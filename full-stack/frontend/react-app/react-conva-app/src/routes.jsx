import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Complex from "./pages/complex";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/complex">
          <Complex />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
