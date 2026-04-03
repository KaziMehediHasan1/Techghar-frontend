import { IconBundler } from '@/assets/icons/IconBundler';
import { NavLink } from 'react-router-dom';
import { Star } from 'lucide-react';
import type { INewProduct } from '@/types/newProductTypes';

interface VerticalCardProps {
  data: INewProduct[];
}

const VerticalCard = ({ data }: VerticalCardProps) => {
  console.log('Product Data:-', data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {data.map((item: INewProduct) => (
        <NavLink to={`/product/${item._id}`} className="flex h-full" key={item._id}>
          <div className="w-full bg-white rounded-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            {/* STOCK INDICATOR */}
            {item.stock ? (
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
                src={item.images[0]}
                alt="gadget-image"
                loading="lazy"
                className="w-full h-40 sm:h-44 object-contain"
              />
            </div>

            {/* RATING */}
            <section className="flex items-center gap-1 text-xs sm:text-sm mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill={i < item.averageRating ? '#FFB800' : 'none'}
                  className={
                    i < item.averageRating ? 'text-[#FFB800]' : 'text-gray-300'
                  }
                />
              ))}

              <p className="text-gray-500 ml-1">({item.totalReviews})</p>
            </section>

            {/* TITLE */}
            <h2 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2 mb-3 grow">
              {item.title}
            </h2>

            {/* PRICING */}
            <section className="flex items-center mt-auto gap-2">
              <p className="text-xs sm:text-sm text-gray-400 line-through">
                {item.price.toFixed(2)}
              </p>
              <p className="text-lg font-semibold text-brand-primary">
                ${item.finalPrice.toFixed(2)}
              </p>
            </section>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default VerticalCard;
