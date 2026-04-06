import { IconBundler } from '@/assets/icons/IconBundler';
import { Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HorizontalCardSkeleton } from '@/components/cards/HorizontalCardSkeleton';
import type { INewProduct } from '@/types/newProductTypes';

interface HorizontalCardProps<T> {
  data?: T[];
  isLoading?: boolean;
}

const HorizontalCard = ({
  data,
  isLoading,
}: HorizontalCardProps<INewProduct>) => {
  return (
    <>
      {isLoading ? (
        <HorizontalCardSkeleton />
      ) : (
        <div className="hidden sm:flex flex-col gap-4">
          {data?.map((item) => (
            <NavLink
              key={item._id}
              to={`/product/${item._id}`}
              className="block"
            >
              <div className="w-full bg-white rounded-md border border-gray-200 p-4 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                {/* 1. IMAGE SECTION */}
                <div className="w-full sm:w-48 lg:w-56 shrink-0 flex justify-center">
                  <img
                    src={item?.images?.[0] || '/placeholder-image.png'} // ডাইনামিক ইমেজ
                    alt={item.title}
                    className="w-full h-40 sm:h-48 object-contain"
                  />
                </div>

                {/* 2. CONTENT SECTION */}
                <div className="flex-1 flex flex-col gap-2 w-full">
                  <div
                    className={`flex items-center gap-1 text-xs sm:text-sm ${item.stock ? 'text-green-600' : 'text-red-500'}`}
                  >
                    <IconBundler.Check
                      className={`w-4 h-4 p-0.5 rounded-full text-white ${item.stock ? 'bg-green-500' : 'bg-red-500'}`}
                    />
                    <p>{item.stock ? 'In Stock' : 'Out of Stock'}</p>
                  </div>

                  <h2 className="text-base sm:text-lg font-medium text-gray-800 line-clamp-2">
                    {item.title}
                  </h2>

                  <section className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < item.averageRating ? '#FFB800' : 'none'}
                        className={
                          i < item.averageRating
                            ? 'text-[#FFB800]'
                            : 'text-gray-300'
                        }
                      />
                    ))}
                    <p className="text-gray-400 text-xs ml-2">
                      Reviews ({item.totalReviews})
                    </p>
                  </section>

                  <p className="hidden md:line-clamp-2 text-sm text-gray-500 mt-1">
                    {item.description}
                  </p>
                </div>

                {/* 3. PRICING & ACTION */}
                {/* 3. PRICING & ACTION */}
                <div className="w-full sm:w-32 lg:w-40 flex flex-col sm:items-end justify-center gap-3">
                  <div className="text-left sm:text-right">
                    <p className="text-xs text-gray-400 line-through">
                      ${(item?.price || 0).toFixed(2)}
                    </p>
                    {/* item.finalPrice না থাকলে 0 দেখাবে */}
                    <p className="text-xl font-bold text-black">
                      ${(item?.finalPrice || 0).toFixed(2)}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50 px-6 w-full"
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default HorizontalCard;
