const CategoryCardSkeleton = () => {
  return (
    <div className="w-full bg-white rounded-md border border-gray-200 p-4 animate-pulse">
      {/* STOCK INDICATOR SKELETON */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
        <div className="w-16 h-3 bg-gray-200 rounded"></div>
      </div>

      {/* IMAGE SKELETON */}
      <div className="flex justify-center mb-3">
        <div className="w-full h-40 sm:h-44 bg-gray-100 rounded-md"></div>
      </div>

      {/* RATING SKELETON */}
      <div className="flex items-center gap-1 mb-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="w-4 h-4 bg-gray-200 rounded-sm"></div>
        ))}
        <div className="w-6 h-3 bg-gray-200 rounded ml-1"></div>
      </div>

      {/* TITLE SKELETON */}
      <div className="space-y-2 mb-4">
        <div className="w-full h-4 bg-gray-200 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
      </div>

      {/* PRICING SKELETON */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-3 bg-gray-100 rounded"></div>
        <div className="w-16 h-6 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export const CategoryWiseSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {/* First card (represents the CategoryCard "Custom Build") */}
      <div className="w-full h-full min-h-75 bg-gray-100 rounded-md animate-pulse"></div>

      {/* Product Card Skeletons */}
      {[1, 2, 3, 4, 5].map((item) => (
        <CategoryCardSkeleton key={item} />
      ))}
    </div>
  );
};

export default CategoryWiseSkeleton;
