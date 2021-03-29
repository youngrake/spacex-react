import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Header } from '../components';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/launches" render={() => <h1>Launches</h1>} />
      <Route path="/about" render={() => <h1>About</h1>} />
    </Switch>
  </Router>
);

export default Routes;
