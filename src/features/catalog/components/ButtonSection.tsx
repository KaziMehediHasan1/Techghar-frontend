import { IconBundler } from '@/assets/icons/IconBundler';
import { Button } from '@/components/ui/button';
import CatalogCards from '@/features/catalog/components/CatalogCards';
import Filtered from '@/features/catalog/components/Filtered';
import ShowMenu from '@/features/catalog/components/ShowMenu';
import SortMenu from '@/features/catalog/components/SortMenu';
import type { INewProduct } from '@/types/newProductTypes';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ButtonSection = ({
  data,
  totalItems,
  isLoading,
  pageNo,
}: {
  data?: INewProduct[] | undefined;
  totalItems?: number;
  isLoading?: boolean;
  pageNo?: number;
}) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [cardShowType, setCardShowType] = useState<'list' | 'grid'>('list');

  const activeFilters = Array.from(searchParams.entries()).filter(
    ([key]) => key !== 'sort' && key !== 'page'
  );

  const removeFilter = (key: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.delete(key);
    setSearchParams(newParams);
  };

  const clearAllFilters = () => {
    setSearchParams({});
  };

  return (
    <section className="flex flex-col lg:flex-row gap-4">
      {/* LEFT COLUMN: Sidebar + Header */}
      <aside className="lg:w-62.5 shrink-0">
        <div className="hidden lg:flex flex-col gap-2 p-2">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center ..."
          >
            ‹ Back
          </button>
        </div>
        <Filtered />
      </aside>

      {/* RIGHT COLUMN: Controls + data */}
      <main className="flex-1">
        {/* This is the new TopBar specifically for the right side */}
        <div className="flex flex-wrap items-center justify-between mb-2 gap-4">
          <p className="text-gray-500 text-xs">
            Showing {data?.length} of {totalItems} items
          </p>

          <div className="flex items-center gap-3">
            <SortMenu />
            <ShowMenu />
            <div className="flex items-center gap-2 ml-2">
              <button className="" onClick={() => setCardShowType('grid')}>
                <IconBundler.GridSort className="w-6 h-6 hidden sm:block cursor-pointer" />
              </button>
              <button onClick={() => setCardShowType('list')}>
                <IconBundler.VercitalSort className="w-6 h-6 hidden sm:block cursor-pointer opacity-40" />
              </button>
            </div>
          </div>
        </div>

        {/* filterd items */}
        <div>
          <section className="flex items-center gap-3">
            {activeFilters?.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {activeFilters?.map(([key, value]) => (
                  <Button
                    key={key}
                    variant="outline"
                    onClick={() => removeFilter(key)}
                    className="rounded border-[#CACDD8] px-3 py-1 h-8 text-xs font-semibold flex items-center gap-2 bg-white hover:bg-red-50 text-black shadow-none group"
                  >
                    <span className="text-[#A2A6B0] font-normal capitalize">
                      {key}:
                    </span>
                    <span className="uppercase">{value}</span>
                    <IconBundler.Cancle
                      size={14}
                      className="ml-1 text-red-500 opacity-60 group-hover:opacity-100"
                    />
                  </Button>
                ))}

                {/* Clear All Button */}
                <Button
                  variant="outline"
                  onClick={clearAllFilters}
                  className="rounded border-[#CACDD8] px-4 py-1 h-8 text-xs font-bold bg-white hover:bg-gray-100 text-black shadow-none"
                >
                  Clear All
                </Button>
              </div>
            )}
          </section>
          <CatalogCards
            cardType={cardShowType}
            data={data}
            isLoading={isLoading}
            totalPage={totalItems}
            pageNo={pageNo}
          />
        </div>
      </main>
    </section>
  );
};

export default ButtonSection;
