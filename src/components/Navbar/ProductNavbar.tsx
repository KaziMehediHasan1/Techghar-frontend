import { useSearchParams } from 'react-router-dom';

type CategoryLink = {
  name: string;
  query: string; // Ekhane 'path'-er poriborte 'query' value thakbe (e.g. "GS Series")
};

const ProductNavbar = ({ categoryLink }: { categoryLink: CategoryLink[] }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // URL theke current 'series' parameter-ti neya
  const currentSeries = searchParams.get('series');

  const handleFilter = (query: string) => {
    // URL-e 'series' key-te value set kora
    setSearchParams({ series: query });
  };

  return (
    <div className="hidden sm:flex items-center flex-wrap gap-3 sm:gap-4 border-b border-gray-100">
      {categoryLink.map((link) => {
        // Jodi current URL parameter ebong link-er query match kore, tobe active
        const isActive = currentSeries === link.query;

        return (
          <button
            key={link.query}
            onClick={() => handleFilter(link.query)}
            className={`text-sm font-medium transition-all pb-1 ${
              isActive
                ? 'text-brand-primary border-b-2 border-brand-primary font-bold'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {link.name}
          </button>
        );
      })}

      {/* Clear Filter Option (Optional) */}
      {currentSeries && (
        <button
          onClick={() => setSearchParams({})}
          className="text-sm font-semibold text-red-400 hover:text-red-600 "
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default ProductNavbar;
