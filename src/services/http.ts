/* eslint-disable @typescript-eslint/no-explicit-any */
import { environment } from '@src/environment';
import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestConfig } from 'axios';

export interface CustomAxiosRequestConfig extends RawAxiosRequestConfig {
  acceptableErrorCodes?: string[];
  params?: any;
  unknownErrorCode?: string;
}
export type HttpHeaders = Record<string, string>;
export type Fulfilled<V = any> = (value: V) => Promise<V> | V;
export type Rejected<V = any> = (error: AxiosError | any) => Error | Promise<AxiosResponse<V>> | any;
export type RequestInterceptor<TNewResponse = any> = {
  onFulfilled: Fulfilled<AxiosRequestConfig>;
  onRejected: Rejected<TNewResponse>;
};
export type ResponseInterceptor<TResponse = any, TNewResponse = any> = {
  onFulfilled: Fulfilled<AxiosResponse<TResponse>>;
  onRejected: Rejected<TNewResponse>;
};

export class HttpServiceImpl {
  private _client!: AxiosInstance;
  private readonly baseUrl: string;

  addRequestInterceptor = ({ onFulfilled, onRejected }: RequestInterceptor) => {
    this.requestInterceptors.push({ onFulfilled, onRejected });
  };

  addResponseInterceptor = ({ onFulfilled, onRejected }: ResponseInterceptor) => {
    this.responseInterceptors.push({ onFulfilled, onRejected });
  };

  requestInterceptors: RequestInterceptor[] = [];

  responseInterceptors: ResponseInterceptor[] = [];

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private mergeConfig(config?: CustomAxiosRequestConfig) {
    return {
      ...config,
      baseURL: this.baseUrl,
      headers: {
        ...config?.headers,
      },
      withCredentials: true,
    } as CustomAxiosRequestConfig;
  }

  delete<ResponseType>(url: string, config?: CustomAxiosRequestConfig) {
    return this._client.delete<ResponseType>(url, this.mergeConfig(config));
  }

  fromConfig<T = any>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this._client.request(this.mergeConfig(config));
  }

  get<ResponseType>(url: string, config?: CustomAxiosRequestConfig) {
    return this._client.get<ResponseType>(url, this.mergeConfig(config));
  }

  patch<ResponseType>(url: string, body?: any, config?: CustomAxiosRequestConfig) {
    return this._client.patch<ResponseType>(url, body, this.mergeConfig(config));
  }

  post<ResponseType>(url: string, body?: any, config?: CustomAxiosRequestConfig) {
    return this._client.post<ResponseType>(url, body, this.mergeConfig(config));
  }

  put<ResponseType>(url: string, body?: any, config?: CustomAxiosRequestConfig) {
    return this._client.put<ResponseType>(url, body, this.mergeConfig(config));
  }

  setUp() {
    this._client = Axios.create(this.mergeConfig());
    for (const x of this.requestInterceptors) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this._client.interceptors.request.use(x.onFulfilled, x.onRejected);
    }

    for (const x of this.responseInterceptors) {
      this._client.interceptors.response.use(x.onFulfilled, x.onRejected);
    }
  }
}

export const RawgApiHttpClient = new HttpServiceImpl(environment.rawgApiBaseUrl);
