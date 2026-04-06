import HorizontalCard from '@/components/cards/HorizontalCard';
import VerticalCard from '@/components/cards/VerticalCard';
import Pagination from '@/components/Pagination';

import type { INewProduct } from '@/types/newProductTypes';
// Path to the component above
import { useState } from 'react';

type TCard = {
  cardType: string;
  data: INewProduct[] | undefined;
  isLoading?: boolean;
  totalPage?: number;
  pageNo?: number;
  onPageChange?: (page: number) => void;
};

const CatalogCards = ({ cardType, data, isLoading, totalPage, onPageChange }: TCard) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="my-2">
      <div className="min-h-105">
        {/* Logic: 
           1. On small screens (< 640px), we always show VerticalCard.
           2. On larger screens, we show based on the toggle.
        */}
        <div className="block sm:hidden">
          <VerticalCard data={data} isLoading={isLoading} />
        </div>

        <div className="hidden sm:block">
          {cardType === 'grid' ? (
            <VerticalCard data={data} isLoading={isLoading} />
          ) : (
            <HorizontalCard data={data} isLoading={isLoading} />
          )}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPage}
        onPageChange={(page: number) => {
          setCurrentPage(page);
          onPageChange?.(page);
        }}
      />
    </div>
  );
};

export default CatalogCards;
