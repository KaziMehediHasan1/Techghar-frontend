import useFreeFetch from '@/hooks/useFreeFetch';
import CategoryWiseCard from '../cards/CategoryWiseCard';
import CategoryWiseSkeleton from './CategoryCardSkeleton';

interface IProductData {
  _id: string;
  averageRating: number;
  stock: boolean;
  totalReviews: number;
  price: number;
  finalPrice: number;
  title: string;
  images: string[];
}
interface IProductAPIResponse {
  success: boolean;
  data: {
    result: IProductData[];
  };
}

const Accessories = () => {
  const { data, isLoading } = useFreeFetch<IProductAPIResponse>(
    '/product?category=Accessory&limit=4'
  );

  return (
    <div>
      {isLoading ? (
        <CategoryWiseSkeleton />
      ) : (
        // Pass data.data.result based on your console log
        <CategoryWiseCard data={data?.data?.result || []} />
      )}
    </div>
  );
};

export default Accessories;
