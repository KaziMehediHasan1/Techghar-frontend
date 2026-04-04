import DynamicFilterMenu from '@/features/catalog/components/DynamicFilterMenu';

const items = ['ASC', 'DESC'];
const SortMenu = () => {
  return (
    <div>
      <DynamicFilterMenu name="Sort" items={items} />
    </div>
  );
};

export default SortMenu;
