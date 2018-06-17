import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import { composeWithDevTools } from 'redux-devtools-extension';

import * as reducers from '../reducers';

export function configureStore(initialState) {
  const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2, // see "Merge Process" section for details.
  };

  const rootReducer = combineReducers(reducers);
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools()
  );

  const persistor = persistStore(store);

  return { store, persistor };
}
