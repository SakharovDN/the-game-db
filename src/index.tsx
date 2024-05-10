import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider, useDispatch } from 'react-redux';

import App from './app';
import { setupInterceptors } from './app/services/interceptors';
import { configureAppStore } from './store/store-config';

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
