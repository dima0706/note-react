import request from '@/lib/request';

export function getCategory() {
  return request.get('/api/note/category');
}

export function getNoteList() {
  return request.get('/api/note/list');
}

export function getNoteDetail(id: string) {
  return request.get(`/api/note/${id}`);
}
