/* eslint-disable react-hooks/static-components */
import React, { useMemo, useState } from 'react';
import { ChevronUp, ChevronDown, Check, X, Filter } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import useFreeFetch from '@/hooks/useFreeFetch';

// --- Demo Data ---
const priceRanges = [
  { label: '$0.00 - $1,000.00', value: '0-1000' },
  { label: '$1,000.00 - $2,000.00', value: '1000-2000' },
  { label: '$2,000.00 - $3,000.00', value: '2000-3000' },
];

const Filtered = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // const queryUrl = `/product?category=&price=&colors=&page=1&sort=desc&limit=25`;
  // console.log('query URL:-', queryUrl);

  const { data, isLoading } = useFreeFetch('/product?limit=50');
  // console.log('Filterd Data Here:-', data?.data.result);
  const dynamicFilters = useMemo(() => {
    const products = data?.data?.result || data?.data?.result || [];

    if (products.length === 0)
      return { categories: [], colors: [], categoryCounts: {} };

    // 1. Unique Categories & Counting
    const counts: Record<string, number> = {};
    products.forEach((p: any) => {
      if (p.category) {
        counts[p.category] = (counts[p.category] || 0) + 1;
      }
    });

    const uniqueCategories = Object.keys(counts);

    // 2. Unique Colors
    const uniqueColors = Array.from(
      new Set(products.flatMap((p: any) => p.colors || []))
    ).filter(Boolean);

    return {
      categories: uniqueCategories,
      colors: uniqueColors,
      categoryCounts: counts,
    };
  }, [data]);

 

  const handleFilterClick = (key: string, value: string) => {
    const currentParams = new URLSearchParams(searchParams);
    if (currentParams.get(key) === value) {
      currentParams.delete(key);
    } else {
      currentParams.set(key, value);
    }
    setSearchParams(currentParams);
  };

  const clearAllFilters = () => {
    setSearchParams({});
  };

  const activeFilterCount = Array.from(searchParams.keys()).length;

  // --- [NEW] Shared Filter Logic (Desktop & Mobile use this same UI) ---
  const FilterItemsList = () => (
    <div className="space-y-6">
      {/* Dynamic Categories with Counts */}
      {dynamicFilters?.categories.length > 0 && (
        <FilterSection
          title="Category"
          items={dynamicFilters.categories}
          // Mapping counts from our memoized object
          counts={dynamicFilters.categories.map(
            (cat) => dynamicFilters.categoryCounts[cat]
          )}
          activeValue={searchParams.get('category')}
          onSelect={(val: string) => handleFilterClick('category', val)}
        />
      )}

      {/* Static Price Ranges */}
      <FilterSection
        title="Price"
        items={priceRanges.map((p) => p.label)}
        counts={priceRanges.map(() => '')}
        activeValue={searchParams.get('price')}
        onSelect={(val: string) => handleFilterClick('price', val)}
      />

      <div className="border-b border-gray-200 pb-5">
        <div className="flex justify-between items-center font-bold text-sm mb-4">
          <span>Color</span>
          <ChevronUp size={16} />
        </div>
        <div className="flex gap-3">
          {dynamicFilters.colors.slice(1, 5).map((color: string) => {
            const isActive = searchParams.get('colors') === color;
            return (
              <div
                key={color}
                onClick={() => handleFilterClick('colors', color)}
                className={`w-7 h-7 rounded-full cursor-pointer transition-all flex items-center justify-center border-2 
                    ${isActive ? 'ring-2 ring-[#0156FF] ring-offset-2 border-white scale-110' : 'border-gray-200 opacity-80 hover:opacity-100'}`}
                style={{ backgroundColor: color.toLowerCase() }}
              >
                {isActive && (
                  <Check
                    size={12}
                    className={
                      color.toLowerCase() === 'white'
                        ? 'text-black'
                        : 'text-white'
                    }
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      {/* --- [ADDED] Small Device Trigger Button --- */}
      <div className="sm:hidden mb-4">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="w-full py-3 bg-gray-50 text-sm font-bold border border-gray-200 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
        >
          <Filter size={16} />
          Filter & Sort {activeFilterCount > 0 && `(${activeFilterCount})`}
        </button>
      </div>

      {/* --- [ADDED] Mobile Drawer Full Overlay --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-1000 sm:hidden">
          {/* Backdrop Blur */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Right-side Drawer Panel */}
          <div className="absolute right-0 top-0 h-full w-[85%] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-5 border-b flex justify-between items-center bg-gray-50">
              <h2 className="font-bold text-lg uppercase tracking-tight text-gray-800">
                Filters
              </h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 hover:bg-gray-200 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {activeFilterCount > 0 && (
                <button
                  onClick={clearAllFilters}
                  className="mb-4 text-xs font-bold text-red-500 underline"
                >
                  Clear All
                </button>
              )}
              <FilterItemsList />
            </div>

            <div className="p-5 border-t bg-white">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-[#0156FF] text-white rounded-full font-bold text-sm shadow-lg active:scale-95 transition-transform"
              >
                Apply Filters{' '}
                {activeFilterCount > 0 && `(${activeFilterCount})`}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- [UNCHANGED] Desktop Sidebar View --- */}
      <div className="hidden sm:flex flex-col bg-sky p-5 rounded border border-gray-100">
        <h2 className="text-center font-bold text-sm mb-4 uppercase tracking-wider">
          Filters
        </h2>

        {activeFilterCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="text-xs border-2 border-[#A2A6B0] rounded-full w-full text-[#666] font-bold cursor-pointer py-2 hover:bg-white transition-all mb-6 active:scale-95"
          >
            Clear Filter
          </button>
        )}

        <FilterItemsList />

        <button
          className={`mt-6 w-full py-3 rounded-full cursor-pointer text-xs font-bold transition-all
            ${activeFilterCount > 0 ? 'bg-[#0156FF] text-white hover:bg-blue-700 shadow-md shadow-blue-100' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
        >
          Apply Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
        </button>
      </div>
    </div>
  );
};

// --- [UNCHANGED COMPONENT] ---
const FilterSection = ({ title, items, counts, activeValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 pb-5">
      <div
        className="flex justify-between items-center font-bold text-sm cursor-pointer mb-3 hover:text-[#0156FF] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm">{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {isOpen && (
        <ul className="space-y-3">
          {items?.map((item, index) => {
            const isActive = activeValue === item;
            return (
              <li
                key={item}
                onClick={() => onSelect(item)}
                className={`flex justify-between text-xs cursor-pointer transition-all px-1 py-0.5 rounded
                  ${isActive ? 'text-[#0156FF] font-bold' : 'text-gray-600 hover:text-black hover:translate-x-1'}`}
              >
                <span className="uppercase">{item}</span>
                <span
                  className={`font-semibold ${isActive ? 'text-[#0156FF]' : 'text-gray-400'}`}
                >
                  {counts[index]}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Filtered;
