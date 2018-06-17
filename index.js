import React from 'react';

import { AppRegistry } from 'react-native';
import App from './src/app';

import { Provider } from 'react-redux';
import { configureStore } from './src/store';

const store = configureStore();

const app = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent('sobtracker', () => app);
