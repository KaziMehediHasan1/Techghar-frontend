import DynamicFilterMenu from "@/features/catalog/components/DynamicFilterMenu";
const items = ["1", "2", "3", "4", "5"];
const SortMenu = () => {
  return (
    <div>
      <DynamicFilterMenu name="Sort" items={items} />
    </div>
  );
};

export default SortMenu;
