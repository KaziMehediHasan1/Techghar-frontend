import { NavLink } from "react-router-dom";

type CategoryCardProps = {
  title: string;
  link: string;
  image: string;
};

const CategoryCard = ({ title, link, image }: CategoryCardProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="relative w-full bg-cover bg-center rounded-md overflow-hidden hidden sm:flex items-center "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 p-4 sm:p-5 md:p-6 text-white">
        <h1 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          {title}
        </h1>

        <NavLink
          to={link}
          className="text-xs sm:text-sm underline hover:text-gray-200 transition"
        >
          See All Products
        </NavLink>
      </div>
    </div>
  );
};

export default CategoryCard;
