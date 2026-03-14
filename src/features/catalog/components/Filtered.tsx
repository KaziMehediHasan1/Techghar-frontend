import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react"; // Using lucide-react for icons

const Filtered = () => {
  return (
    <div className="w-full">
      {/* Small Device View */}
      <div className="sm:hidden">
        <FilterdBySmallDevice />
      </div>

      {/* Desktop Sidebar View */}
      <div className="hidden sm:flex flex-col bg-sky p-4 rounded">
        <h2 className="text-center font-bold text-sm mb-4">
          Filters
        </h2>

        <button className="text-sm border-2 border-[#A2A6B0] rounded-full w-full text-[#A2A6B0] font-semibold cursor-pointer py-1.5 hover:bg-white transition-colors mb-6">
          Clear Filter
        </button>

        <div className="space-y-6">
          <FilterSection
            title="Category"
            items={["CUSTOM PCS", "MSI ALL-IN-ONE PCS", "HP/COMPAQ PCS"]}
            counts={[15, 45, 1]}
          />
          <FilterSection
            title="Price"
            items={[
              "$0.00 - $1,000.00",
              "$1,000.00 - $2,000.00",
              "$2,000.00 - $3,000.00",
            ]}
            counts={[19, 21, 9]}
          />

          {/* Color Section */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex justify-between items-center font-bold text-sm mb-3">
              <span>Color</span>
              <ChevronUp size={16} />
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-black cursor-pointer border-2 border-transparent hover:border-blue-500" />
              <div className="w-6 h-6 rounded-full bg-red-600 cursor-pointer border-2 border-blue-500 p-0.5">
                <div className="w-full h-full rounded-full border border-white" />
              </div>
            </div>
          </div>
        </div>

        <button className="mt-6 w-full py-3 bg-[#0156FF] text-white rounded-full cursor-pointer text-xs hover:bg-blue-700 transition-all">
          Apply Filters (2)
        </button>
      </div>
    </div>
  );
};

// Reusable Section Component
const FilterSection = ({ title, items, counts }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 pb-4">
      <div
        className="flex justify-between items-center font-bold text-sm cursor-pointer mb-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-sm">{title}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {isOpen && (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li
              key={item}
              className="flex justify-between text-xs cursor-pointer hover:text-[#0156FF]"
            >
              <span className="uppercase">{item}</span>
              <span className="font-semibold text-gray-500">
                {counts[index]}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const FilterdBySmallDevice = () => {
  return (
    <button className="w-full py-2 bg-gray-100 text-sm font-bold border rounded-md">
      Filter & Sort
    </button>
  );
};

export default Filtered;
