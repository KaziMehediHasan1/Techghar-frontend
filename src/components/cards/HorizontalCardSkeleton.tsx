export const HorizontalCardSkeleton = () => {
  return (
    <div className="hidden sm:flex flex-col gap-4 w-full">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="w-full bg-white rounded-md border border-gray-100 p-4 flex flex-col sm:flex-row gap-6 items-center sm:items-start animate-pulse"
        >
          {/* 1. IMAGE SECTION SKELETON */}
          <div className="w-full sm:w-48 lg:w-56 shrink-0 flex justify-center">
            <div className="w-full h-40 sm:h-48 bg-gray-200 rounded-md"></div>
          </div>

          {/* 2. CONTENT SECTION SKELETON */}
          <div className="flex-1 flex flex-col gap-3 w-full">
            {/* STOCK INDICATOR */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-gray-200"></div>
              <div className="h-3 bg-gray-200 rounded w-20"></div>
            </div>

            {/* TITLE */}
            <div className="space-y-2 mt-2">
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-1 mt-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  className="w-3 h-3 bg-gray-100 rounded-full"
                ></div>
              ))}
              <div className="h-3 bg-gray-100 rounded w-16 ml-2"></div>
            </div>

            {/* DESCRIPTION */}
            <div className="hidden md:block space-y-2 mt-2">
              <div className="h-3 bg-gray-50 rounded w-full"></div>
              <div className="h-3 bg-gray-50 rounded w-5/6"></div>
            </div>
          </div>

          {/* 3. PRICING & ACTION SECTION SKELETON */}
          <div className="w-full sm:w-32 lg:w-40 flex flex-col sm:items-end justify-center gap-4">
            <div className="flex flex-col gap-2 sm:items-end w-full">
              <div className="h-3 bg-gray-100 rounded w-12"></div>{' '}
              {/* Old Price */}
              <div className="h-6 bg-gray-200 rounded w-20"></div>{' '}
              {/* Current Price */}
            </div>
            <div className="h-10 bg-gray-200 rounded-full w-full"></div>{' '}
            {/* Button */}
          </div>
        </div>
      ))}
    </div>
  );
};
