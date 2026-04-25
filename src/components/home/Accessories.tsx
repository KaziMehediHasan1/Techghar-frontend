import useFreeFetch from '@/hooks/useFreeFetch';
import CategoryWiseCard from '../cards/CategoryWiseCard';
import CategoryWiseSkeleton from './CategoryCardSkeleton';
import type { IProductAPIResponse } from '@/types/homepage.type';

const Accessories = () => {
  const { data, isLoading } = useFreeFetch<IProductAPIResponse>(
    '/product?category=Accessory&limit=4'
  );

  const result = data?.data?.result || [];

  return (
    <div>
      {isLoading ? (
        <CategoryWiseSkeleton />
      ) : (
        <CategoryWiseCard
          data={result}
          categoryTitle="Accessories"
          linkName="See All Accessories"
        />
      )}
    </div>
  );
};

export default Accessories;
