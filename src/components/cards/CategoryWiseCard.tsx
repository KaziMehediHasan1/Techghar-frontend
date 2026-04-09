import { IconBundler } from '@/assets/icons/IconBundler';
import PcCase from '@/assets/images/pc-case.png';
import { NavLink } from 'react-router-dom';
import CategoryCard from '@/components/cards/CategoryCard';
import { Star } from 'lucide-react';

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

const CategoryWiseCard = ({ data }: { data: IProductData[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {/* Static Category Card - Ensure this also handles height if possible */}
      <div className="flex h-full">
        <CategoryCard image={PcCase} link="" title="Custom Build" />
      </div>

      {/* Dynamic Product Cards */}
      {data?.map((product) => (
        <NavLink
          key={product._id}
          to={`/product/${product._id}`}
          className="flex h-full" // 1. Stretch NavLink to grid height
        >
          <div className="w-full bg-white rounded-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {' '}
            {/* 2. Column layout with full height */}
            {/* STOCK INDICATOR */}
            {product.stock ? (
              <div className="flex items-center gap-1 text-green-600 text-xs sm:text-sm mb-2">
                <IconBundler.Check className="w-4 h-4 p-0.5 bg-green-500 rounded-full text-white" />
                <p>In Stock</p>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-red-500 text-xs sm:text-sm mb-2">
                <IconBundler.PhoneCall className="w-4 h-4 p-0.5 bg-red-500 rounded-full text-white" />
                <p>Check Availability</p>
              </div>
            )}
            {/* IMAGE */}
            <div className="flex justify-center mb-3">
              <img
                src={
                  product.images[0] ||
                  'https://placehold.co/400x400?text=No+Image'
                }
                alt={product.title}
                loading="lazy"
                className="w-full h-40 sm:h-44 object-contain"
              />
            </div>
            {/* RATING */}
            {/* RATING */}
            <section className="flex items-center gap-1 text-xs sm:text-sm mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < product.averageRating ? '#FFB800' : 'none'}
                  className={
                    i < product.averageRating ? 'text-[#FFB800]' : 'text-gray-300'
                  }
                />
              ))}

              <p className="text-gray-500 ml-1">({product.totalReviews})</p>
            </section>
            {/* TITLE */}
            <h2 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2 mb-3 grow">
              {' '}
              {/* 3. Grow fills available space */}
              {product.title}
            </h2>
            {/* PRICING */}
            <section className="flex items-center gap-2 mt-auto">
              {' '}
              {/* 4. mt-auto pins this to the bottom */}
              <p className="text-xs sm:text-sm text-gray-400 line-through">
                ${product.price?.toFixed(2)}
              </p>
              <p className="text-lg font-semibold text-blue-600">
                ${product.finalPrice?.toFixed(2)}
              </p>
            </section>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default CategoryWiseCard;
