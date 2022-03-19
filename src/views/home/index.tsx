import './index.less';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';

export default function Home() {
  const navigate = useNavigate();
  const routeToLogin = () => {
    navigate('/login?by_home=1');
  };
  return (
    <Layout
      full
      page={
        <div className="home-page">
          <span>home</span>
          <Button onClick={routeToLogin}>
            <span>route to login</span>
          </Button>
        </div>
      }
    ></Layout>
  );
}
