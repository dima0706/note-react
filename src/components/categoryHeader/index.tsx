import { services } from '@/service';
import { useEffectService } from '@/hooks';
import './index.less';

export default function CategoryHeader() {
  useEffectService(() => {
    const fetchData = async () => {
      const result = await services.note.getCategory();
      console.log(result);
    };

    fetchData();
  });
  return <div className="category-header">category-header</div>;
}
