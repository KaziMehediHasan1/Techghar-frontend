import { IconBundler } from "@/assets/icons/IconBundler";
import ProductNavbar from "@/components/Navbar/ProductNavbar";
import { useState } from "react";
import PcCase from "@/assets/images/pc-case.png";
import Case from "@/assets/images/desktop-case.webp";
import { NavLink } from "react-router-dom";
import CategoryCard from "@/components/cards/CategoryCard";
import { Star } from "lucide-react";

const msiSeries = [
  { name: "MSI GS Series", path: "/laptops/msi-gs-series" },
  { name: "MSI GT Series", path: "/laptops/msi-gt-series" },
  { name: "MSI GL Series", path: "/laptops/msi-gl-series" },
  { name: "MSI GE Series", path: "/laptops/msi-ge-series" },
];


const CategoryWiseCard = () => {
  return (
    <div className="space-y-5">
      <ProductNavbar categoryLink={msiSeries} />
      <Card />
    </div>
  );
};

export default CategoryWiseCard;

const Card = () => {
  const [check] = useState<boolean>(true);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <CategoryCard image={PcCase} link="" title="Custome Build" />
      {/* <Heading title="Custom " linkName="ddddd" link="/" className="block sm:hidden" /> */}
      {[1, 2, 3, 4, 5].map(() => (
        <NavLink to="/product/details">
          <div className="w-full bg-white rounded-md border border-gray-200 p-4 hover:shadow-lg transition-shadow duration-300">
            {/* STOCK INDICATOR */}
            {check ? (
              <div className="flex items-center gap-1 text-green-600 text-xs sm:text-sm mb-2">
                <IconBundler.Check className="w-4 h-4 p-0.5 bg-green-500 rounded-full text-white" />
                <p>In Stock</p>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-red-500 text-xs sm:text-sm mb-2">
                <IconBundler.PhoneCall className="w-4 h-4 p-0.5 bg-red-500 rounded-full text-white" />
                <p>Check Availability</p>
              </div>
            )}

            {/* IMAGE */}
            <div className="flex justify-center mb-3">
              <img
                src={Case}
                alt="gadget-image"
                loading="lazy"
                className="w-full h-40 sm:h-44 object-contain"
              />
            </div>

            {/* RATING */}
            <section className="flex items-center gap-1 text-xs sm:text-sm mb-2">
              <Star
                // key={i}
                size={16}
                // fill={i < review.rating ? "currentColor" : "none"}
                // className={i < review.rating ? "" : "text-gray-200"}
              />
              <Star
                // key={i}
                size={16}
                // fill={i < review.rating ? "currentColor" : "none"}
                // className={i < review.rating ? "" : "text-gray-200"}
              />
              <Star
                // key={i}
                size={16}
                // fill={i < review.rating ? "currentColor" : "none"}
                // className={i < review.rating ? "" : "text-gray-200"}
              />
              <Star
                // key={i}
                size={16}
                // fill={i < review.rating ? "currentColor" : "none"}
                // className={i < review.rating ? "" : "text-gray-200"}
              />
              <Star
                // key={i}
                size={16}
                // fill={i < review.rating ? "currentColor" : "none"}
                // className={i < review.rating ? "" : "text-gray-200"}
              />
              <Star
                // key={i}
                size={16}
                // fill={i < review.rating ? "currentColor" : "none"}
                // className={i < review.rating ? "" : "text-gray-200"}
              />
              <p className="text-gray-500 ml-1">(5)</p>
            </section>

            {/* TITLE */}
            <h2 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2 mb-3">
              EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-One PC
            </h2>

            {/* PRICING */}
            <section className="flex items-center gap-2">
              <p className="text-xs sm:text-sm text-gray-400 line-through">
                $450
              </p>
              <p className="text-lg font-semibold text-brand-primary">$320</p>
            </section>
          </div>
        </NavLink>
      ))}
    </div>
  );
};
