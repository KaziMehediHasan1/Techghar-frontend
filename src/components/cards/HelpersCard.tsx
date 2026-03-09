import { IconBundler } from "@/assets/icons/IconBundler";


// Demo Data for 3 Cards
const HELPERS_DATA = [
  {
    id: 1,
    title: "Product Support",
    description:
      "Up to 3 years on-site warranty available for your peace of mind.",
    icon: <IconBundler.Support className="w-6 h-6 sm:w-8 sm:h-8" />,
  },
  {
    id: 2,
    title: "Secure Payment",
    description:
      "Your transactions are safe with our multi-layer encryption system.",
    icon: <IconBundler.CircleUser className="w-6 h-6 sm:w-8 sm:h-8" />, // Replace with actual icon
  },
  {
    id: 3,
    title: "Fast Delivery",
    description:
      "Get your products delivered within 24-48 hours across the country.",
    icon: <IconBundler.Blog className="w-6 h-6 sm:w-8 sm:h-8" />, // Replace with actual icon
  },
];

const HelpersCard = () => {
  return (
    <section className="w-full px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {HELPERS_DATA.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center text-center p-6 rounded duration-300"
          >
            {/* Icon Container */}
            <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 bg-brand-primary text-white rounded-full">
              {item.icon}
            </div>

            {/* Text Content */}
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-70 mx-auto">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelpersCard;
