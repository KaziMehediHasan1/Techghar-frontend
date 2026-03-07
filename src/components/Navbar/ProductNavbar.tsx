import { NavLink } from "react-router-dom";

type CategoryLink = {
  name: string;
  path: string;
};

const ProductNavbar = ({ categoryLink }: { categoryLink: CategoryLink[] }) => {
  return (
    <div className="hidden sm:flex flex-wrap gap-3 sm:gap-4">
      {categoryLink.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `text-sm font-medium ${
              isActive
                ? "text-brand-primary border-b-2 border-brand-primary"
                : "text-gray-500"
            }`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default ProductNavbar;
