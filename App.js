import React from 'react';
import { Provider } from 'react-redux';
import { enableScreens } from 'react-native-screens';

import AppRoute from './routes/AppRoute';
import store from 'store/store';

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <AppRoute />
    </Provider>
  );
}
