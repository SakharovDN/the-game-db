import { AxiosError } from 'axios';
import { HttpServiceImpl, RawgApiHttpClient } from './http';
import { environment } from '../../environment';

const KEY_STRING = 'key';

export function setupInterceptors() {
  setInterceptor(RawgApiHttpClient, {
    apiKey: { key: KEY_STRING, value: environment.rawgApiKey },
  });
}

const setInterceptor = (
  service: HttpServiceImpl,
  options?: {
    withCredentials?: boolean;
    apiKey?: { key: string; value: string };
  }
) => {
  service.addRequestInterceptor({
    onFulfilled: async (config) => {
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
    onRejected: (error) => Promise.reject(error),
  });

  service.addResponseInterceptor({
    onFulfilled: (data) => Promise.resolve(data),
    onRejected: async (error: AxiosError<any>) => Promise.reject(error?.response),
  });

  service.setUp();
};
