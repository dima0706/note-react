import { lazy } from 'react';

const Home = lazy(() => import('@/views/home'));
const Login = lazy(() => import('@/views/login'));
const Editor = lazy(() => import(/* webpackChunkName: 'editor'*/ '@/views/editor'));

export const rootRoutes = [
  { label: '首页', key: 'home', path: '/', component: <Home /> },
  { label: '登录页', key: 'login', path: '/login', component: <Login /> },
  { label: '编辑页', key: 'editor', path: '/editor', component: <Editor /> }
];
