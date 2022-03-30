import '@/App.less';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { rootRoutes } from '@/routes';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {rootRoutes.map((item) => (
            <Route key={item.key} path={item.path} element={item.component}></Route>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
