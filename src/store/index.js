import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from '../reducers';

export function configureStore(initialState) {
  const store = createStore(
    combineReducers(reducers),
    initialState,
    composeWithDevTools()
  );

  return store;
}
