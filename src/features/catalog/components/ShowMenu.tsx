import DynamicFilterMenu from '@/features/catalog/components/DynamicFilterMenu';
const items = ['10', '20', '30', '40', '50'];

const ShowMenu = () => {
  return (
    <div>
      <DynamicFilterMenu name="page" items={items} />
    </div>
  );
};

export default ShowMenu;
