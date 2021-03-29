import { ApplicationState, createRootReducer } from './store';
import { History } from 'history';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';

const configureStore = (history: History): Store<ApplicationState> => {
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    createRootReducer(history),
    composeEnhancers(applyMiddleware(routerMiddleware(history))),
  );

  return store;
};

export default configureStore;
