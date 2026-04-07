import Wrapper from '@/components/layout/Wrapper';

const BlogDetailSkeleton = () => {
  return (
    <Wrapper>
      <div className="max-w-4xl mx-auto py-6 sm:py-10 px-4 animate-pulse">
        {/* BACK BUTTON SKELETON */}
        <div className="h-6 w-20 bg-gray-200 rounded mb-6"></div>

        {/* HEADER SKELETON */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            {/* Category badge */}
            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
            {/* Date */}
            <div className="h-4 w-32 bg-gray-100 rounded"></div>
          </div>

          {/* Title - 2 lines for mobile/desktop */}
          <div className="h-8 sm:h-10 bg-gray-200 rounded w-full mb-2"></div>
          <div className="h-8 sm:h-10 bg-gray-200 rounded w-3/4"></div>
        </header>

        {/* IMAGE SKELETON - Aspect Video ratio */}
        <div className="aspect-video bg-gray-200 rounded-xl mb-10"></div>

        {/* CONTENT SKELETON - Paragraph lines */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-5/6"></div>
          <div className="h-4 bg-gray-100 rounded w-full"></div>
          <div className="h-4 bg-gray-100 rounded w-4/5"></div>

          <div className="pt-4 space-y-4">
            <div className="h-4 bg-gray-100 rounded w-full"></div>
            <div className="h-4 bg-gray-100 rounded w-full"></div>
            <div className="h-4 bg-gray-100 rounded w-2/3"></div>
          </div>
        </div>

        {/* FOOTER SKELETON */}
        <footer className="mt-12 pt-8 border-t border-gray-100">
          <div className="h-5 w-40 bg-gray-100 rounded"></div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default BlogDetailSkeleton;
