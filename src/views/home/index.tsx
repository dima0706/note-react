import './index.less';
import Layout from '@/components/Layout';
import CategoryHeader from '@/components/categoryHeader';

export default function Home() {
  return (
    <Layout subHeader={CategoryHeader()}>
      <div className="home-page">
        <div className="home-page-content">
          <div className="home-header"></div>
        </div>
      </div>
    </Layout>
  );
}
