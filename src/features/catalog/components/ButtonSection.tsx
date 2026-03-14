import { IconBundler } from "@/assets/icons/IconBundler";
import { Button } from "@/components/ui/button";
import CatalogCards from "@/features/catalog/components/CatalogCards";
import Filtered from "@/features/catalog/components/Filtered";
import ShowMenu from "@/features/catalog/components/ShowMenu";
import SortMenu from "@/features/catalog/components/SortMenu";
import { ChevronDown } from "lucide-react";
import { NavLink } from "react-router-dom";

const ButtonSection = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-4">
      {/* LEFT COLUMN: Sidebar + Header */}
      <aside className="lg:w-62.5 shrink-0">
        <div className="hidden lg:flex flex-col gap-2 p-2">
          <NavLink
            to=""
            className="flex items-center justify-center text-xs font-bold gap-1"
          >
            ‹ Back
          </NavLink>
        </div>
        <Filtered />
      </aside>

      {/* RIGHT COLUMN: Controls + Products */}
      <main className="flex-1">
        {/* This is the new TopBar specifically for the right side */}
        <div className="flex flex-wrap items-center justify-between mb-2 gap-4">
          <p className="text-gray-500 text-xs">Items 1-35 of 61</p>

          <div className="flex items-center gap-3">
            <SortMenu />
            <ShowMenu />
            <div className="flex items-center gap-2 ml-2">
              <IconBundler.GridSort className="w-6 h-6 cursor-pointer" />
              <IconBundler.VercitalSort className="w-6 h-6 cursor-pointer opacity-40" />
            </div>
          </div>
        </div>

        <div className="">
          <section className="flex items-center gap-3">
            <Button
              variant="outline"
              className="rounded hidden border-[#CACDD8] px-3 py-1 h-auto text-xs font-semibold sm:flex items-center gap-2 bg-white hover:bg-gray-50 text-black shadow-none"
            >
              <span className="text-[#A2A6B0] font-normal">Name :</span>
              <span>Dynam</span>
              <ChevronDown size={14} className="ml-2 opacity-60" />
            </Button>
            <Button
              variant="outline"
              className="rounded hidden border-[#CACDD8] px-3 py-1 h-auto text-xs font-semibold sm:flex items-center gap-2 bg-white hover:bg-gray-50 text-black shadow-none"
            >
              <span className="text-[#A2A6B0] font-normal">Name :</span>
              <span>Dynam</span>
              <ChevronDown size={14} className="ml-2 opacity-60" />
            </Button>
            <Button
              variant="outline"
              className="rounded hidden border-[#CACDD8] px-3 py-1 h-auto text-xs font-semibold sm:flex items-center gap-2 bg-white hover:bg-gray-50 text-black shadow-none"
            >
              <span className="text-[#A2A6B0] font-normal">Clear</span>
            </Button>
          </section>
          <CatalogCards />
        </div>
      </main>
    </section>
  );
};

export default ButtonSection;
