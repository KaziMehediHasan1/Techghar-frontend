import DynamicFilterMenu from "@/features/catalog/components/DynamicFilterMenu";
const items = ["1", "2", "3", "4", "5"];

const ShowMenu = () => {
  return (
    <div>
      <DynamicFilterMenu name="Show" items={items} />
    </div>
  );
};

export default ShowMenu;
