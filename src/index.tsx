import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

import { HelmetProvider } from 'react-helmet-async';
import { setupInterceptors } from './app/services/interceptors';
import { configureAppStore } from './store/store-config';
import { Provider, useDispatch } from 'react-redux';

setupInterceptors();
const store = configureAppStore();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);
