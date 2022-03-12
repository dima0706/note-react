import { useState } from 'react';
import '@/App.less';
import { Button } from 'antd';
import { services } from '@/service';

function App() {
  const [count, setCount] = useState(0);

  const fetchFn = async () => {
    const result = await services.auth.login({ phone: '131', password: '123' });
    console.log(result);
  };
  fetchFn();

  return (
    <div className="App">
      <div className="count-text">
        <i className="iconfont icon-weixin"></i>
        <span>count：</span>
        <span>{count}</span>
      </div>
      <div className="tools">
        <Button onClick={() => setCount(count + 1)}>
          <span>add</span>
        </Button>
        <Button disabled={count < 1} onClick={() => setCount(count - 1)}>
          <span>sub</span>
        </Button>
      </div>
    </div>
  );
}

export default App;
