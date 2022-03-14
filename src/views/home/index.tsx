import './index.less';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const routeToLogin = () => {
    navigate('/login?by_home=1');
  };
  return (
    <div className="home-page">
      <span>home</span>
      <Button onClick={routeToLogin}>
        <span>route to login</span>
      </Button>
    </div>
  );
}
