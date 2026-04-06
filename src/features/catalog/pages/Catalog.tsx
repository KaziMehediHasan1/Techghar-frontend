import Wrapper from '@/components/layout/Wrapper';
import Banner from '@/assets/images/AdBanner.png';
// import { BreadcrumbBasic } from "@/components/BreadcrumbBasic";
import ButtonSection from '@/features/catalog/components/ButtonSection';
import { useSearchParams } from 'react-router-dom';
import useFreeFetch from '@/hooks/useFreeFetch';
import { useMemo } from 'react';
import type { INewProduct } from '@/types/newProductTypes';

const Catalog = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const price = searchParams.get('price');
  const sort = searchParams.get('sort');
  const page = searchParams.get('page');
  // const limit = searchParams.get('limit');

  const queryUrl = `/product?category=${
    category || ''
  }&price=${price || ''}&sort=${sort || ''}&limit=${page || ''}`;

  const { data, isLoading } = useFreeFetch(queryUrl);
  const meta = data?.data?.meta;
  const PageNo = meta?.page;
  const totalPage = meta?.totalPage;
  // console.log('query URL Data:-', data?.data?.result, PageNo, totalPage);

  const processedProducts = useMemo(() => {
    if (!data?.data?.result) return [];

    console.log('Processing products data...');

    return data?.data?.result?.map((item: INewProduct) => ({
      _id: item._id,
      title: item?.title,
      description: item?.description,
      price: item?.price || 0,
      finalPrice: item?.finalPrice || 0,
      averageRating: item?.averageRating || 0,
      stock: item?.stock ?? false,
      category: item?.category,
      brand: item?.brand,
      // images: Array?.isArray(item?.images) ? item?.images : [],
      images:
        Array.isArray(item.images) && item?.images.length > 0
          ? item.images
          : ['https://placehold.co/400x400?text=No+Image'],
      totalReviews: item?.totalReviews || 0,
      createdAt: item?.createdAt,
      updatedAt: item?.updatedAt,
    }));
  }, [data]);
  // const [products, setProducts] = useState([]); totalItems={totalPage} pageNo={ApiPage}
  // console.log('categoryName', categoryName, 'Search Params-', searchParams);

  return (
    <div>
      <Wrapper>
        {/* Banner Section */}
        <section>
          <img src={Banner} alt="banner" className="w-full h-10 sm:h-auto" />
        </section>
        <section className="mt-4">
          {/* Toggle bar and card changing button */}
          <ButtonSection
            data={processedProducts}
            isLoading={isLoading}
            pageNo={PageNo}
            totalItems={totalPage}
          />
        </section>
      </Wrapper>
    </div>
  );
};

export default Catalog;
