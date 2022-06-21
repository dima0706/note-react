import { ReactElement } from 'react';
import './index.less';
import logoImg from '@/assets/favicon.ico';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { RightOutlined } from '@ant-design/icons';

export default function Layout({ children, full = false, showCreateBtn = true, SubHeader }: LayoutProps) {
  let contentClassName = 'page-layout-content';
  if (full) {
    contentClassName = `${contentClassName} is-full`;
  }

  let createBtn: ReactElement = <></>;
  if (showCreateBtn) {
    createBtn = (
      <div className="layout-header-create-btn">
        <Link to="/editor">
          <Button type="primary">
            <span>写文章</span>
            <RightOutlined />
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="page-layout">
      <div className="page-layout-header">
        <img src={logoImg} alt="logo" className="layout-header-logo" />
        <div className="layout-header-menu"></div>
        {createBtn}
        <div className="layout-header-info">info</div>
      </div>
      {SubHeader && (
        <div className="sub-header-content">
          <SubHeader />
        </div>
      )}
      <div className={contentClassName}>{children}</div>
    </div>
  );
}

interface LayoutProps {
  children?: ReactElement;
  SubHeader?: React.FC;
  full?: boolean;
  showCreateBtn?: boolean;
}
