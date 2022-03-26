import Home from '@/views/home';
import Login from '@/views/login';
import Editor from '@/views/editor';

export const rootRoutes = [
  { label: '首页', key: 'home', path: '/', component: <Home /> },
  { label: '登录页', key: 'login', path: '/login', component: <Login /> },
  { label: '编辑页', key: 'editor', path: '/editor', component: <Editor /> }
];
