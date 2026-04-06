import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number | 0;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  if (!totalPages || totalPages <= 0) return null;

  return (
    <div className="flex justify-center items-center gap-2 mt-8 mb-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-30 hover:bg-gray-100 transition-colors"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold transition-all
              ${
                currentPage === pageNumber
                  ? 'bg-sky-500 border-2 border-transparent text-white' // sky কালার ঠিক করা হয়েছে
                  : 'text-gray-500 hover:bg-gray-50'
              }`}
          >
            {pageNumber}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 disabled:opacity-30 hover:bg-gray-100 transition-colors"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};
export default  Pagination;