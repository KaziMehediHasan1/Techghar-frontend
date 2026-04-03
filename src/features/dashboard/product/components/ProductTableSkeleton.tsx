const ProductTableSkeleton = () => {
  return (
    <div className="space-y-4 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center px-2">
        <div className="h-8 w-48 bg-slate-200 rounded"></div>
        <div className="h-10 w-64 bg-slate-200 rounded"></div>
      </div>

      {/* Table Skeleton */}
      <div className="bg-white border rounded-xl overflow-hidden shadow-sm">
        <div className="bg-slate-50 border-b p-4 grid grid-cols-6 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-4 bg-slate-200 rounded w-24"></div>
          ))}
        </div>

        <div className="divide-y divide-slate-100">
          {[...Array(5)].map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="p-4 grid grid-cols-6 gap-4 items-center"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded w-32"></div>
              </div>
              <div className="h-4 bg-slate-100 rounded w-16"></div>
              <div className="h-4 bg-slate-100 rounded w-20"></div>
              <div className="h-4 bg-slate-100 rounded w-16"></div>
              <div className="h-4 bg-slate-100 rounded w-20"></div>
              <div className="flex gap-2">
                <div className="h-8 w-8 bg-slate-200 rounded-full"></div>
                <div className="h-8 w-8 bg-slate-200 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTableSkeleton