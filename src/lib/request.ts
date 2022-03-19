import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

class AjaxRequest {
  private request = axios.create();

  constructor() {
    this.request.interceptors.request.use((config): AxiosRequestConfig => {
      return config;
    });
    this.request.interceptors.response.use(
      (res) => this._handleRes(res),
      (err: AxiosError) => this._handleError(err)
    );
  }

  private _handleRes(res: AxiosResponse): any {
    return res.data;
  }

  private _handleError(err: AxiosError): AjaxError {
    return err;
  }

  async get(url: string, params: any = {}, options?: AxiosRequestConfig): Promise<[AjaxError | null, any]> {
    try {
      const { data } = await this.request.get(url, { ...(options || {}), params });
      return [null, data];
    } catch (err: any) {
      return Promise.resolve([err, null]);
    }
  }

  async post(url: string, params: any = {}, options?: AxiosRequestConfig): Promise<[AjaxError | null, any]> {
    try {
      const { data } = await this.request.post(url, params, { ...(options || {}) });
      return [null, data];
    } catch (err: any) {
      return Promise.resolve([err, null]);
    }
  }
}

export default new AjaxRequest();

interface AjaxError extends AxiosError {
  message: string;
}
