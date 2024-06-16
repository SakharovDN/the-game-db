import { HelmetProvider } from 'react-helmet-async';
import { Provider, useDispatch } from 'react-redux';

import { setupInterceptors } from '@services/interceptors';
import { configureAppStore } from '@store/store-config';
import ReactDOM from 'react-dom/client';

import App from './app';

import './app/styles/colors.scss';
import './app/styles/global-styles.scss';
import './i18n';

setupInterceptors();
const store = configureAppStore();
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);
