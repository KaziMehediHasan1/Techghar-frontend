import HorizontalCard from "@/components/cards/HorizontalCard";
import VerticalCard from "@/components/cards/VerticalCard";

type TCard = {
  cardType: string;
};
const CatalogCards = ({ cardType }: TCard) => {
  return (
    <div className="my-2">
      {cardType == "grid" && (
        <>
          <VerticalCard />
        </>
      )}
      {cardType == "list" && (
        <>
          <HorizontalCard />
        </>
      )}
    </div>
  );
};

export default CatalogCards;
