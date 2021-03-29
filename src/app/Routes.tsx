import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from '../components';

const Routes = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route path="/launches" render={() => <h1>Launches</h1>} />
      <Route path="/about" render={() => <h1>About</h1>} />
    </Switch>
  </>
);

export default Routes;
