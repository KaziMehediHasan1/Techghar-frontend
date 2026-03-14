import { IconBundler } from "@/assets/icons/IconBundler";
import CatalogCards from "@/features/catalog/components/CatalogCards";
import Filtered from "@/features/catalog/components/Filtered";
import ShowMenu from "@/features/catalog/components/ShowMenu";
import SortMenu from "@/features/catalog/components/SortMenu";
import { NavLink } from "react-router-dom";

const ButtonSection = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-4">
      {/* LEFT COLUMN: Sidebar + Header */}
      <aside className="lg:w-62.5 shrink-0 bg-amber-300">
        <div className="hidden lg:flex flex-col gap-2 mb-4">
          <NavLink
            to=""
            className="flex items-center text-xs font-bold gap-1 italic"
          >
            ‹ Back
          </NavLink>
        </div>
        <Filtered />
      </aside>

      {/* RIGHT COLUMN: Controls + Products */}
      <main className="flex-1">
        {/* This is the new TopBar specifically for the right side */}
        <div className="flex flex-wrap items-center justify-between mb-2 bg-amber-900 gap-4">
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

        <div className="bg-amber-500">
            fafadf
          <CatalogCards />
        </div>
      </main>
    </section>
  );
};

export default ButtonSection;
