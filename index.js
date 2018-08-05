import React from 'react';

import { AppRegistry, YellowBox } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './src/App';

import { configureStore } from './src/store';

const { store, persistor } = configureStore();

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);

const app = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent('sobtracker', () => app);
