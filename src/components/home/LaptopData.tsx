import useFreeFetch from '@/hooks/useFreeFetch';
import ProductNavbar from '../Navbar/ProductNavbar';
import CategoryWiseSkeleton from './CategoryCardSkeleton';
import type { IProductAPIResponse } from '@/types/homepage.type';
import CategoryWiseCard from '../cards/CategoryWiseCard';
import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

const LaptopData = () => {
  const [searchParams] = useSearchParams();
  const seriesQuery = searchParams.get('series') || '';

  // 1. Shob MSI Laptop fetch kora jate amra unique series-gulo Navbar-e dekhate pari
  // Ekhane limit bariye deya bhalo jate shob unique series khuje pay
  const { data: allMsiData, isLoading: isNavLoading } =
    useFreeFetch<IProductAPIResponse>(
      '/product?brand=MSI&category=Laptop&limit=100'
    );

  // 2. Database theke asha data theke Unique Series gulo ber kora
  const dynamicSeriesLinks = useMemo(() => {
    const products = allMsiData?.data?.result || [];
    // Unique series ber korar logic (Set use kore)
    const uniqueSeries = Array.from(
      new Set(products.map((p) => p.series).filter(Boolean))
    );

    return uniqueSeries.map((seriesName) => ({
      name: String(seriesName),
      query: String(seriesName),
    }));
  }, [allMsiData]);

  // 3. Filtered Data Fetch: URL-e series thakle shudhu shei series-er data fetch hobe
  const fetchUrl = `/product?brand=MSI&category=Laptop&limit=4${
    seriesQuery ? `&series=${encodeURIComponent(seriesQuery)}` : ''
  }`;

  const { data: filteredData, isLoading: isProductLoading } =
    useFreeFetch<IProductAPIResponse>(fetchUrl);
  const msiLaptops = filteredData?.data?.result || [];

  if (isNavLoading || isProductLoading) return <CategoryWiseSkeleton />;

  return (
    <div className="space-y-4 py-4">
      {/* Dynamic Navbar: Ekhon database theke series gulo ashbe */}
      <ProductNavbar categoryLink={dynamicSeriesLinks} />

      {/* Product Cards Grid */}
      <div className="flex-1">
        {msiLaptops.length > 0 ? (
          <CategoryWiseCard
            categoryTitle={
              seriesQuery ? `MSI ${seriesQuery}` : 'All MSI Laptops'
            }
            data={msiLaptops}
            linkName="See All MSI Laptop"
          />
        ) : (
          <div className="h-full flex flex-col items-center justify-center border border-gray-100 rounded-lg py-20 text-gray-400">
            <p>No laptops found for this series.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LaptopData;
