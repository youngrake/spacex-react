import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers, Reducer } from 'redux';
import { History } from 'history';

export interface ApplicationState {
  router: RouterState;
}

export const createRootReducer = (history: History): Reducer<ApplicationState> =>
  combineReducers({
    router: connectRouter(history),
  });
