import { NavLink } from 'react-router-dom';

type CategoryCardProps = {
  title: string;
  link: string;
  image: string;
  linkName: string;
};

const CategoryCard = ({ title, link, image, linkName }: CategoryCardProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      // Increased min-height to match the vertical aspect ratio of the image
      className="relative w-full bg-cover bg-center rounded-sm overflow-hidden flex flex-col items-center justify-center text-center transition-transform duration-300"
    >
      {/* Overlay: Using a slightly darker gradient at the bottom for text readability */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Title - Centered vertically and horizontally */}
      <div className="relative z-10 px-4">
        <h1 className="text-xl md:text-3xl font-bold text-white leading-tight">
          {title}
        </h1>
      </div>

      {/* Link - Positioned at the bottom */}
      <div className="absolute bottom-10 z-10">
        <NavLink
          to={link}
          className="text-white text-sm md:text-base border-b border-white pb-1 hover:text-gray-300 hover:border-gray-300 transition-all"
        >
          {linkName}
        </NavLink>
      </div>
    </div>
  );
};

export default CategoryCard;
