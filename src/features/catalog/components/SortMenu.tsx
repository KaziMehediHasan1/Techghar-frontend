import DynamicFilterMenu from '@/features/catalog/components/DynamicFilterMenu';

const items = ['ASC', 'DESC'];
const SortMenu = () => {
  return (
    <div>
      <DynamicFilterMenu label='sort' name="sort" items={items} />
    </div>
  );
};

export default SortMenu;
