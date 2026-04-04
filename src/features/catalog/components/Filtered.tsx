import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Check } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

// --- Demo Data ---
const FILTER_DATA = [
  {
    id: 'category',
    title: 'Category',
    items: ['CUSTOM PCS', 'MSI ALL-IN-ONE PCS', 'HP/COMPAQ PCS'],
    counts: [15, 45, 1],
  },
  {
    id: 'price',
    title: 'Price',
    items: [
      '$0.00 - $1,000.00',
      '$1,000.00 - $2,000.00',
      '$2,000.00 - $3,000.00',
    ],
    counts: [19, 21, 9],
  },
];

const COLORS = [
  { id: 'black', hex: '#000000' },
  { id: 'red', hex: '#E11D48' },
  { id: 'blue', hex: '#0156FF' },
];

const Filtered = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Function to handle filter clicks
  const handleFilterClick = (key: string, value: stringF) => {
    const currentParams = new URLSearchParams(searchParams);

    // Toggle Logic: Jodi ager thekei thake, tobe remove korbe, nahole add korbe
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

  // Count how many filters are active
  const activeFilterCount = Array.from(searchParams.keys()).length;

  return (
    <div className="w-full">
      {/* Small Device View */}
      <div className="sm:hidden">
        <FilterdBySmallDevice activeCount={activeFilterCount} />
      </div>

      {/* Desktop Sidebar View */}
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

        <div className="space-y-6">
          {FILTER_DATA.map((section) => (
            <FilterSection
              key={section.id}
              title={section.title}
              items={section.items}
              counts={section.counts}
              activeValue={searchParams.get(section.id)}
              onSelect={(val: string) => handleFilterClick(section.id, val)}
            />
          ))}

          {/* Color Section */}
          <div className="border-b border-gray-200 pb-5">
            <div className="flex justify-between items-center font-bold text-sm mb-4">
              <span>Color</span>
              <ChevronUp size={16} />
            </div>
            <div className="flex gap-3">
              {COLORS.map((color) => {
                const isActive = searchParams.get('color') === color.id;
                return (
                  <div
                    key={color.id}
                    onClick={() => handleFilterClick('color', color.id)}
                    style={{ backgroundColor: color.hex }}
                    className={`w-7 h-7 rounded-full cursor-pointer transition-all flex items-center justify-center border-2 
                      ${isActive ? 'ring-2 ring-[#0156FF] ring-offset-2 border-white scale-110' : 'border-transparent opacity-80 hover:opacity-100'}`}
                  >
                    {isActive && <Check size={12} className="text-white" />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Apply Button */}
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

const FilterSection = ({
  title,
  items,
  counts,
  activeValue,
  onSelect,
}: {
  title: string;
  items: string;
  counts: number | string;
  activeValue: string;
  onSelect: (val: string) => void;
}) => {
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

const FilterdBySmallDevice = ({ activeCount }) => {
  return (
    <button className="w-full py-3 bg-gray-50 text-sm font-bold border border-gray-200 rounded-lg flex items-center justify-center gap-2">
      Filter & Sort{' '}
      {activeCount > 0 && (
        <span className="bg-[#0156FF] text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center">
          {activeCount}
        </span>
      )}
    </button>
  );
};

export default Filtered;
