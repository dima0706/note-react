import '@/App.less';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from '@/views/home';
import Login from '@/views/login';

export default function App() {
  const pageTabArr = [
    { label: '首页', key: 'home', path: '/', component: <Home /> },
    { label: '登录页', key: 'login', path: '/login', component: <Login /> }
  ];
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          {pageTabArr.map((item) => (
            <Route key={item.key} path={item.path} element={item.component}></Route>
          ))}
        </Routes>
      </HashRouter>
    </div>
  );
}
