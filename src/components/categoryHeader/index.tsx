import { services } from '@/service';
import { useEffectService } from '@/hooks';
import './index.less';

const CategoryHeader: React.FC = () => {
  useEffectService(() => {
    const fetchData = async () => {
      const result = await services.note.getCategory();
      console.log(result);
    };

    fetchData();
  });
  return <div className="category-header">category-header</div>;
};

export default CategoryHeader;
