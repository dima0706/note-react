import './index.less';

export default function RankList({ title, list }: RankProps) {
  const rankSortClassArr = ['first', 'second', 'third'];
  return (
    <div className="rank-list">
      <h2 className="rank-list-title">{title}</h2>
      <div className="rank-ul">
        {list.map((item, index) => {
          let sortClassName = 'rank-li-sort';
          if (rankSortClassArr[index]) {
            sortClassName = `${sortClassName} ${rankSortClassArr[index]}`;
          }
          return (
            <div className="rank-li" key={item.id}>
              <div className="rank-li-header">
                <div className={sortClassName}>{index + 1}</div>
                <div className="rank-li-title single-ellipsis">{item.title}</div>
              </div>
              <div className="rank-li-content">
                <span>{item.text}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface RankProps {
  title: string;
  list: Info[];
}

interface Info {
  id: string;
  title: string;
  text: string;
}
