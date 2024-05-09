import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestConfig } from 'axios';

import { environment } from '../../environment';

export interface CustomAxiosRequestConfig extends RawAxiosRequestConfig {
  unknownErrorCode?: string;
  acceptableErrorCodes?: string[];
  params?: any;
}

export type HttpHeaders = Record<string, string>;
export type Fulfilled<V = any> = (value: V) => V | Promise<V>;
export type Rejected<V = any> = (err: AxiosError | any) => Promise<AxiosResponse<V>> | any | Error;
export type RequestInterceptor<TNewResponse = any> = {
  onFulfilled: Fulfilled<AxiosRequestConfig>;
  onRejected: Rejected<TNewResponse>;
};
export type ResponseInterceptor<TResponse = any, TNewResponse = any> = {
  onFulfilled: Fulfilled<AxiosResponse<TResponse>>;
  onRejected: Rejected<TNewResponse>;
};

export class HttpServiceImpl {
  private readonly baseUrl: string;
  private _client!: AxiosInstance;
  responseInterceptors: ResponseInterceptor[] = [];
  requestInterceptors: RequestInterceptor[] = [];

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  setUp() {
    this._client = Axios.create(this.mergeConfig());
    for (const x of this.requestInterceptors) {
      // @ts-ignore
      this._client.interceptors.request.use(x.onFulfilled, x.onRejected);
    }

    for (const x of this.responseInterceptors) {
      this._client.interceptors.response.use(x.onFulfilled, x.onRejected);
    }
  }

  addResponseInterceptor = ({ onFulfilled, onRejected }: ResponseInterceptor) => {
    this.responseInterceptors.push({ onFulfilled, onRejected });
  };

  addRequestInterceptor = ({ onFulfilled, onRejected }: RequestInterceptor) => {
    this.requestInterceptors.push({ onFulfilled, onRejected });
  };

  fromConfig<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this._client.request(this.mergeConfig(config));
  }

  get<ResponseType>(url: string, config?: CustomAxiosRequestConfig) {
    return this._client.get<ResponseType>(url, this.mergeConfig(config));
  }

  post<ResponseType>(url: string, body?: any, config?: CustomAxiosRequestConfig) {
    return this._client.post<ResponseType>(url, body, this.mergeConfig(config));
  }

  put<ResponseType>(url: string, body?: any, config?: CustomAxiosRequestConfig) {
    return this._client.put<ResponseType>(url, body, this.mergeConfig(config));
  }

  patch<ResponseType>(url: string, body?: any, config?: CustomAxiosRequestConfig) {
    return this._client.patch<ResponseType>(url, body, this.mergeConfig(config));
  }

  delete<ResponseType>(url: string, config?: CustomAxiosRequestConfig) {
    return this._client.delete<ResponseType>(url, this.mergeConfig(config));
  }

  private mergeConfig(config?: CustomAxiosRequestConfig) {
    return {
      ...config,
      headers: {
        ...config?.headers,
      },
      withCredentials: true,
      baseURL: this.baseUrl,
    } as CustomAxiosRequestConfig;
  }
}

export const RawgApiHttpClient = new HttpServiceImpl(environment.rawgApiBaseUrl);
