import Wrapper from '@/components/layout/Wrapper';
import Banner from '@/assets/images/AdBanner.png';
// import { BreadcrumbBasic } from "@/components/BreadcrumbBasic";
import ButtonSection from '@/features/catalog/components/ButtonSection';
import { useParams, useSearchParams } from 'react-router-dom';

const Catalog = () => {
  const { categoryName } = useParams();
  const [searchParams] = useSearchParams();

  const category = searchParams.get('category');
  const price = searchParams.get('price');
  const sort = searchParams.get('sort');
  const page = searchParams.get('page');

  const queryUrl = `/product?category=${
    categoryName || category || ''
  }&price=${price || ''}&sort=${sort || ''}&page=${page || ''}`;

  console.log('query URL:-', queryUrl);

  // const [products, setProducts] = useState([]);
  console.log('categoryName', categoryName, 'Search Params-', searchParams);

  
  return (
    <div>
      <Wrapper>
        {/* Banner Section */}
        <section>
          <img src={Banner} alt="banner" className="w-full h-10 sm:h-auto" />
        </section>
        {/* Breadcrum and Header */}
        <section className="space-y-2 my-3">
          {/* <BreadcrumbBasic /> */}
          <h1 className="text-sm sm:text-xl font-semibold">
            MSI PS Series (20)
          </h1>{' '}
          {/* dynamic update*/}
        </section>
        {/* Main Section - filter, card section */}
        <section>
          {/* Toggle bar and card changing button */}
          <ButtonSection />
        </section>
      </Wrapper>
    </div>
  );
};

export default Catalog;
