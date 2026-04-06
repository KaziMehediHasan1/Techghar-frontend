export const FilterSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse p-1">
      {/* Category Skeleton */}
      <div>
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-6"></div> {/* Title */}
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between items-center">
              <div className="h-3 bg-gray-100 rounded w-1/2"></div>
              <div className="h-3 bg-gray-100 rounded w-8"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Price Skeleton */}
      <div>
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-3 bg-gray-100 rounded w-3/4"></div>
          ))}
        </div>
      </div>

      {/* Color Skeleton */}
      <div>
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="flex gap-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-7 h-7 rounded-full bg-gray-100"></div>
          ))}
        </div>
      </div>
    </div>
  );
};