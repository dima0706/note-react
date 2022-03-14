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

  async get(url: string, params: any = {}, options?: any) {
    try {
      const { data } = await this.request.get(url, { ...(options || {}), params });
      return [null, data];
    } catch (err) {
      return Promise.resolve([err, null]);
    }
  }

  async post(url: string, params: any = {}, options?: any) {
    try {
      const { data } = await this.request.post(url, params, { ...(options || {}) });
      return [null, data];
    } catch (err) {
      return Promise.resolve([err, null]);
    }
  }
}

export default new AjaxRequest();

interface AjaxError {
  response: any;
  request: any;
  status: number;
  code: number;
}
