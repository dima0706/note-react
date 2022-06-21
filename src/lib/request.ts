import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

class AjaxRequest {
  private request = axios.create();

  constructor() {
    this.request.interceptors.request.use((config): AxiosRequestConfig => {
      // TODO upd header

      return config;
    });
    this.request.interceptors.response.use(
      (res) => this._handleRes(res),
      (err: AxiosError) => this._handleError(err)
    );
  }

  private _handleRes(res: AxiosResponse): RequestRes {
    const { statusCode, message, data } = res.data;
    if (statusCode !== 1) {
      const err: AjaxError = new Error(message);
      err.code = statusCode;

      // TODO reporter

      return [null, err];
    }
    return [data, null];
  }

  private _handleError(err: AxiosError): ErrorRes {
    const newErr: AjaxError = new Error(err.message);
    newErr.code = err.request.code;

    // TODO reporter

    return [null, newErr];
  }

  get(url: string, params: any = {}, options?: AxiosRequestConfig): Promise<RequestRes> {
    return this.request.get(url, { ...(options || {}), params });
  }

  post(url: string, params: any = {}, options?: AxiosRequestConfig): Promise<RequestRes> {
    return this.request.post(url, params, { ...(options || {}) });
  }
}

export default new AjaxRequest();

interface AjaxError extends Error {
  code?: number;
}

type ErrorRes = [null, AjaxError];

type RequestRes = [any, null] | ErrorRes;
