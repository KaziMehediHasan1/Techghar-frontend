import useFreeFetch from '@/hooks/useFreeFetch';
import CategoryWiseCard from '../cards/CategoryWiseCard';
import CategoryWiseSkeleton from './CategoryCardSkeleton';
import Heading from '../Heading';
import type { IProductAPIResponse } from '@/types/homepage.type';

const AmdBrandData = () => {
  // 1. URL-e filter query pathate hobe jate backend theke AMD data-i ashe
  // Backend theke AMD brand er shob data eksathe anar jonno limit bariye deya bhalo
  const { data, isLoading } = useFreeFetch<IProductAPIResponse>(
    '/product?brand=AMD&limit=4'
  );

  // 2. Data check: Backend structure onujayi result nite hobe
  const amdProducts = data?.data?.result || [];

  if (isLoading)
    return (
      <div className="container mx-auto px-4">
        <CategoryWiseSkeleton />
      </div>
    );

  return (
    <div className="space-y-2">
      <Heading title="AMD Processors & Components" />
      {/* Product Display Area */}
      {amdProducts.length > 0 ? (
        <CategoryWiseCard
          categoryTitle="AMD Processors & Components"
          data={amdProducts}
          linkName="See All AMD Comp."
        />
      ) : (
        <div className="py-20 text-center">
          <p className="text-gray-500">
            No AMD products found in the database.
          </p>
        </div>
      )}
    </div>
  );
};

export default AmdBrandData;
