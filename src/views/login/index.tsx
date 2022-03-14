import './index.less';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default function Login() {
  return (
    <div className="login-page">
      <span>login</span>
      <Button>
        <Link to="/?by_login=1">to home</Link>
      </Button>
    </div>
  );
}
