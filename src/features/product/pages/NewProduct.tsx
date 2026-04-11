import Heading from "@/components/Heading";
import Wrapper from "@/components/layout/Wrapper";
import useFreeFetch from "@/hooks/useFreeFetch";
import VerticalCard from "@/components/cards/VerticalCard";
import VerticalCardSkeleton from "@/components/cards/VerticalCardSkeleton";
import type { INewProduct } from "@/types/newProductTypes";
import { useMemo } from "react";

type TApiNewProduct = {
  data: {
    result: INewProduct[];
  };
};

const NewProduct = () => {
  const { data, isLoading } = useFreeFetch<TApiNewProduct>("/product?sort=-createdAt&limit=50");

  const newArrivals = useMemo(() => {
    if (!data?.data?.result) return [];

    const today = new Date();
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(today.getDate() - 7); 

    return data?.data?.result.filter((product) => {
      const productDate = new Date(product.createdAt);
      return productDate >= sevenDaysAgo && productDate <= today;
    });
  }, [data]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Wrapper>
        <section className="py-2">
          <Heading 
            link="/" 
            title="Fresh Arrivals" 
            linkName="Go Home" 
          />
          <p className="text-gray-500 text-sm mt-2">
            Showing products added in the **last 7 days**.
          </p>
        </section>

        <section>
          {isLoading ? (
            <div>
              {[...Array(10)].map((_, i) => (
                <VerticalCardSkeleton key={i} />
              ))}
            </div>
          ) : newArrivals.length > 0 ? (
            <VerticalCard data={newArrivals} isLoading={isLoading} />
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-dashed border-gray-300 text-center px-4">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                 <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-gray-800 font-semibold text-lg">No products in the last 7 days</h3>
              <p className="text-gray-400 max-w-xs mt-1">
                We haven't added any new items this week. Please check back later or explore our full catalog.
              </p>
            </div>
          )}
        </section>
      </Wrapper>
    </div>
  );
};

export default NewProduct;