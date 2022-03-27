import { ReactElement } from 'react';
import './index.less';
import logoImg from '@/assets/favicon.ico';

export default function Layout({ children, full = false }: LayoutProps) {
  let contentClassName = 'page-layout-content';
  if (full) {
    contentClassName = `${contentClassName} is-full`;
  }
  return (
    <div className="page-layout">
      <div className="page-layout-header">
        <img src={logoImg} alt="logo" className="layout-header-logo" />
        <div className="layout-header-info">info</div>
      </div>
      <div className={contentClassName}>{children}</div>
    </div>
  );
}

interface LayoutProps {
  children?: ReactElement;
  full?: boolean;
}
