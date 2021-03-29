import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import configureStore from '../configureStore';
import Routes from './Routes';
import GlobalStyles, { Wrapper } from './GlobalStyles';

import './fontStyles.css';

const history = createBrowserHistory();

const store = configureStore(history);

const App = () => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <GlobalStyles />
        <Wrapper isLoaded={isLoaded}>
          <Routes />
        </Wrapper>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
