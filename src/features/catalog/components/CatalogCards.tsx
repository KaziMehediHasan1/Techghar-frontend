import HorizontalCard from "@/components/cards/HorizontalCard";
import VerticalCard from "@/components/cards/VerticalCard";
import Pagination from "@/components/Pagination";
// Path to the component above
import { useState } from "react";

type TCard = {
  cardType: string;
};

const CatalogCards = ({ cardType }: TCard) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 6; // This would typically come from your API data

  return (
    <div className="my-2">
      <div className="min-h-105">
        {/* Logic: 
           1. On small screens (< 640px), we always show VerticalCard.
           2. On larger screens, we show based on the toggle.
        */}
        <div className="block sm:hidden">
          <VerticalCard />
        </div>

        <div className="hidden sm:block">
          {cardType === "grid" ? <VerticalCard /> : <HorizontalCard />}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default CatalogCards;
