import Wrapper from '@/components/layout/Wrapper';

const ProductDetailSkeletonLoader = () => {
  return (
    <div className="bg-white min-h-screen animate-pulse">
      {/* --- Sticky Sub-Header Skeleton --- */}
      <nav className="sticky top-0 z-50 bg-gray-50 border-b border-gray-100">
        <Wrapper>
          <div className="flex justify-between items-center h-16">
            <div className="flex gap-6 lg:gap-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-4 w-20 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="hidden lg:flex items-center gap-6">
              <div className="h-4 w-32 bg-gray-200 rounded"></div>
              <div className="h-8 w-24 bg-gray-200 rounded-lg"></div>
              <div className="h-10 w-32 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </Wrapper>
      </nav>

      {/* --- Main Section Skeleton --- */}
      <section className="md:mt-8 py-10">
        <Wrapper>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Side */}
            <div className="lg:col-span-7 space-y-8">
              {/* Breadcrumb */}
              <div className="h-3 w-48 bg-gray-200 rounded"></div>
              
              {/* Title */}
              <div className="space-y-3">
                <div className="h-10 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
              </div>

              {/* Description Lines */}
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-100 rounded"></div>
                <div className="h-4 w-full bg-gray-100 rounded"></div>
                <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
              </div>

              {/* Color Picker */}
              <div className="flex gap-4 pt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200"></div>
                ))}
              </div>

              {/* Meta Info */}
              <div className="flex gap-8 pt-8 border-t border-gray-50">
                <div className="h-3 w-24 bg-gray-100 rounded"></div>
                <div className="h-3 w-24 bg-gray-100 rounded"></div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="lg:col-span-5">
              <div className="aspect-square bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center">
                <div className="w-1/2 h-1/2 bg-gray-200/50 rounded-xl"></div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default ProductDetailSkeletonLoader;