import request from '@/lib/request';

export function getNoteList() {
  return request.get('/api/note/list');
}
