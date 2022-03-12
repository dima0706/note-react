import request from '@/lib/request';

export function login(params: { phone: string; password: string }) {
  return request.get('/api/login', params);
}
