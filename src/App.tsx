import '@/App.less';
import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { rootRoutes } from '@/routes';
import { Skeleton } from 'antd';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Skeleton />}>
          <Routes>
            {rootRoutes.map((item) => (
              <Route key={item.key} path={item.path} element={item.component}></Route>
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
