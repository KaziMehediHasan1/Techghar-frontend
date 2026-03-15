import { IconBundler } from "@/assets/icons/IconBundler";
import { Star } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Case from "@/assets/images/desktop-case.webp";
import { Button } from "@/components/ui/button";

const HorizontalCard = () => {
  const [check] = useState(true);
  return (
    <div className="hidden sm:flex flex-col gap-4">
      {[1, 2, 3, 4, 5].map((item) => (
        <NavLink key={item} to="/product/details" className="block">
          <div className="w-full bg-white rounded-md border border-gray-200 p-4 hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            {/* 1. IMAGE SECTION - Fixed width on desktop */}
            <div className="w-full sm:w-48 lg:w-56 shrink-0 flex justify-center">
              <img
                src={Case}
                alt="gadget-image"
                loading="lazy"
                className="w-full h-40 sm:h-48 object-contain hover:scale-105 transition-transform"
              />
            </div>

            {/* 2. CONTENT SECTION - Expands to fill space */}
            <div className="flex-1 flex flex-col gap-2 w-full">
              {/* STOCK INDICATOR */}
              <div
                className={`flex items-center gap-1 text-xs sm:text-sm ${check ? "text-green-600" : "text-red-500"}`}
              >
                <IconBundler.Check
                  className={`w-4 h-4 p-0.5 rounded-full text-white ${check ? "bg-green-500" : "bg-red-500"}`}
                />
                <p>{check ? "In Stock" : "Check Availability"}</p>
              </div>

              {/* TITLE */}
              <h2 className="text-base sm:text-lg font-medium text-gray-800 line-clamp-2">
                EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One PC
              </h2>

              {/* RATING */}
              <section className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
                <p className="text-gray-400 text-xs ml-2">Reviews (5)</p>
              </section>

              {/* DESCRIPTION - Usually visible in horizontal view */}
              <p className="hidden md:line-clamp-2 text-sm text-gray-500 mt-1">
                This powerful All-In-One PC features a stunning 15.6" multitouch
                display, perfect for both creative work and everyday
                entertainment...
              </p>
            </div>

            {/* 3. PRICING & ACTION SECTION - Right aligned on desktop */}
            <div className="w-full  sm:w-32 lg:w-40 flex flex-col sm:items-end justify-center gap-3">
              <div className="text-left sm:text-right">
                <p className="text-xs text-gray-400 line-through">$450.00</p>
                <p className="text-xl font-bold text-black">$320.00</p>
              </div>

              <Button
                variant="outline"
                className="rounded-full border-blue-600 text-blue-600 hover:bg-blue-50 px-6 w-full"
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default HorizontalCard;
