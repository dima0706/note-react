import './index.less';
import Layout from '@/components/Layout';
import RankList from '@/components/RankList';

export default function Home() {
  const hotList = [
    {
      id: '1',
      title: '你不知道的javascript(一)',
      text: '巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉'
    },
    {
      id: '2',
      title: '你不知道的javascript(二)',
      text: '巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉'
    },
    {
      id: '3',
      title: '你不知道的javascript(三)',
      text: '巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉'
    },
    {
      id: '4',
      title: '你不知道的javascript(四)',
      text: '巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉'
    },
    {
      id: '5',
      title: '你不知道的javascript(五)',
      text: '巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉'
    }
  ];

  const likeList = [
    {
      id: '1',
      title: '人月传说(一)',
      text: '巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉'
    },
    {
      id: '2',
      title: '人月传说(二)',
      text: '巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉'
    },
    {
      id: '3',
      title: '人月传说(三)',
      text: '巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉'
    },
    {
      id: '4',
      title: '人月传说(四)',
      text: '巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉'
    },
    {
      id: '5',
      title: '人月传说(五)',
      text: '巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉巴驴阿拉巴拉'
    }
  ];

  return (
    <Layout
      full
      page={
        <div className="home-page">
          <div className="home-page-content">content</div>
          <div className="home-page-aside">
            <div className="home-page-aside-content">
              <RankList title="热度榜" list={hotList} />
            </div>
            <div className="home-page-aside-content">
              <RankList title="点赞榜" list={likeList} />
            </div>
          </div>
        </div>
      }
    ></Layout>
  );
}
