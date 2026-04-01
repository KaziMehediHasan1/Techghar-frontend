import VerticalCard from '@/components/cards/VerticalCard';
import Heading from '@/components/Heading';
import type {
  IProduct,
  TProductApiResponse,
} from '@/features/dashboard/product/product.types';
import useFetch from '@/hooks/useFetch';

const NewProduct = () => {
  // fetching data from backend with query params for search and pagination
  // const queryUrl = `/product?search=${debounce}&page=${pagination.pageIndex + 1}&limit=${pagination.pageSize}`;
  const queryUrl = `/product/new`;
  const { data } =
    useFetch<TProductApiResponse<IProduct>>(queryUrl);
  console.log('Check New data -', data);
  return (
    <section className="mt-3 space-y-3">
      <Heading
        title="New Product"
        link="/new_product"
        linkName="See All New Products"
      />
      fadfdfa
      <VerticalCard />
    </section>
  );
};

export default NewProduct;
