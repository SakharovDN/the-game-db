import { AxiosError } from 'axios';

import { environment } from '../../environment';
import { HttpServiceImpl, RawgApiHttpClient } from './http';

const KEY_STRING = 'key';

export const setupInterceptors = () => {
	setInterceptor(RawgApiHttpClient, {
		apiKey: { key: KEY_STRING, value: environment.rawgApiKey },
	});
};

const setInterceptor = (
	service: HttpServiceImpl,
	options?: {
		apiKey?: { key: string; value: string };
		withCredentials?: boolean;
	}
) => {
	service.addRequestInterceptor({
		onFulfilled: async config => {
			if (!options?.withCredentials) {
				config.withCredentials = false;
			}

			if (options?.apiKey) {
				config.params = {
					...config.params,
					[options.apiKey.key]: options.apiKey.value,
				};
			}

			return config;
		},
		onRejected: error => Promise.reject(error),
	});

	service.addResponseInterceptor({
		onFulfilled: data => Promise.resolve(data),
		onRejected: async (error: AxiosError<unknown>) => {
			throw error?.response;
		},
	});

	service.setUp();
};
