import React from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from '../configureStore';
import { ConnectedRouter } from 'connected-react-router';
import Routes from './Routes';

const history = createBrowserHistory();

const store = configureStore(history);

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>
);

export default App;
