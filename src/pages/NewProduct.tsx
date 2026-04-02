import VerticalCard from '@/components/cards/VerticalCard';
import VerticalCardSkeleton from '@/components/cards/VerticalCardSkeleton';
import Heading from '@/components/Heading';

import useFetch from '@/hooks/useFetch';
import type {
  INewProduct,
  TNewProductApiResponse,
} from '@/types/newProductTypes';

const NewProduct = () => {
  // fetching data from backend with query params for search and pagination
  // const queryUrl = `/product?search=${debounce}&page=${pagination.pageIndex + 1}&limit=${pagination.pageSize}`;
  const queryUrl = `/product/new`;
  const { data, isLoading } =
    useFetch<TNewProductApiResponse<INewProduct>>(queryUrl);
  const result = data?.data || [];
  console.log('Check New data -');
  return (
    <section className="mt-3 space-y-3">
      <Heading
        title="New Product"
        link="/new_product"
        linkName="See All New Products"
      />
      {isLoading ? <VerticalCardSkeleton /> : <VerticalCard data={result} />}
    </section>
  );
};

export default NewProduct;
