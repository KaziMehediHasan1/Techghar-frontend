import { IconBundler } from '@/assets/icons/IconBundler';
import useDebounce from '@/hooks/useDebounce';
import useFreeFetch from '@/hooks/useFreeFetch';
import { useEffect, useMemo, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

const overlayStyle =
  'fixed inset-0 bg-black/40 transition-opacity duration-300';

const modalContainerStyle =
  'fixed inset-0 z-50 flex items-start justify-center pt-24 px-4';

const modalStyle =
  'w-full max-w-2xl bg-white rounded-md shadow-2xl p-6 transform transition-all duration-300';

const inputStyle =
  'w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-primary';

const tabBaseStyle =
  'px-4 py-2 text-sm font-medium rounded-md transition-colors';

interface ISearchResult {
  _id: string;
  title: string;
  price: number;
  brand: string;
  images: string[];
}
interface IApiResponse {
  success: string;
  statusCode: number;
  message: string;
  data: {
    result: ISearchResult[];
  };
}

const SearchModal = ({ open, onClose }: SearchModalProps) => {
  const [searchData, setSearchData] = useState<string>('');
  const modalRef = useRef<HTMLDivElement>(null); // Ref create korun

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleClickOutside = (e: MouseEvent) => {
      // modalRef check korbe click ta modaler vitore naki baire
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [open, onClose]);

  const debounce = useDebounce<string>(searchData, 800);

  const { data, isLoading } = useFreeFetch<IApiResponse>(
    debounce ? `/product?search=${encodeURIComponent(debounce)}` : ''
  );

  const filteredSearchData = useMemo(() => {
    if (!data?.data) return [];
    return data?.data?.result?.filter((item) => {
      return (
        item.title.toLowerCase().includes(debounce.toLowerCase()) ||
        item.brand.toLowerCase().includes(debounce.toLowerCase())
      );
    });
  }, [data, debounce]);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className={overlayStyle} onClick={onClose} />

      {/* Modal Container */}
      <div className={modalContainerStyle}>
        <div className={`${modalStyle} animate-in fade-in zoom-in-95`}>
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Search Products</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-black transition-colors"
            >
              <IconBundler.Cancle />
            </button>
          </div>

          {/* Search Input */}
          <div className="mb-4">
            <input
              onChange={(e) => setSearchData(e.target.value)}
              type="text"
              placeholder="Search for products, brands..."
              className={inputStyle}
            />
          </div>

          {/* Mode Toggle */}
          <div className="flex gap-2 mb-4">
            <button className={`${tabBaseStyle} bg-gray-100 text-gray-700`}>
              Query Search
            </button>
            <button className={`${tabBaseStyle} bg-gray-100 text-gray-700`}>
              AI Recommendation
            </button>
          </div>

          {/* Result Area */}
          <div className="max-h-96 overflow-y-auto pr-2 custom-scrollbar">
            {isLoading ? (
              <div className="space-y-3 py-4">
                {[1, 2, 3].map((n) => (
                  <div key={n} className="flex gap-4 p-2 animate-pulse">
                    <div className="w-14 h-14 bg-gray-200 rounded" />
                    <div className="flex-1 space-y-2 py-1">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-100 rounded w-1/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredSearchData.length > 0 ? (
              <div className="flex flex-col">
                {filteredSearchData.slice(0, 4).map((product) => (
                  <NavLink
                    key={product?._id}
                    to={`/product/${product?._id}`}
                    onClick={onClose}
                    className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                  >
                    {/* Image Section */}
                    <div className="w-14 h-14 bg-white border border-gray-100 rounded-md overflow-hidden shrink-0">
                      <img
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-gray-800 truncate group-hover:text-blue-600">
                        {product.title}
                      </h4>
                      <p className="text-xs text-gray-500">{product.brand}</p>
                    </div>

                    {/* Price Section */}
                    <div className="text-right shrink-0">
                      <p className="text-sm font-bold text-gray-900">
                        ${product.price}
                      </p>
                    </div>
                  </NavLink>
                ))}
              </div>
            ) : (
              <div className="text-center py-10 text-gray-500 text-sm italic">
                {searchData
                  ? 'No products found.'
                  : 'Start typing to search for products...'}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
