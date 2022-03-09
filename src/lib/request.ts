import axios from 'axios';

class AjaxRequest {
  private request = axios.create();

  constructor() {
    this.request.interceptors.request.use((config) => {
      return config;
    });
    this.request.interceptors.response.use(
      (res) => this._handleRes(res),
      (err) => this._handleError(err)
    );
  }

  private _handleRes(res: any) {
    return res;
  }

  private _handleError(err: AjaxError) {
    return err;
  }

  get(url: string, params: any = {}, options?: any) {
    return this.request.get(url, { ...(options || {}), params });
  }

  post(url: string, params: any = {}, options?: any) {
    return this.request.post(url, params, { ...(options || {}) });
  }
}

export default new AjaxRequest();

interface AjaxError {
  response: any;
  request: any;
  status: number;
  code: number;
}
