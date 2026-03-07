import React from "react";
import { cn } from "@/lib/utils";
import LaptopAccessories from "@/assets/images/Laptop-Accessories.jpg";
import Gadget from "@/assets/images/Gadget.jpeg";
import ATSCase from "@/assets/images/ATS-Case.jpeg";
import { NavLink } from "react-router-dom";

// Demo Data (Repeated for UI Testing)
const BLOG_POSTS = [
  {
    id: 1,
    image: LaptopAccessories,
    title: "Best Laptop Accessories for Productivity in 2026",
    date: "March 5, 2026",
    category: "Accessories",
  },
  {
    id: 2,
    image: Gadget,
    title: "Top 10 Must-Have Gadgets for Every Tech Enthusiast",
    date: "March 2, 2026",
    category: "Gadgets",
  },
  {
    id: 3,
    image: ATSCase,
    title: "How to Choose the Perfect PC Case for Your Build",
    date: "Feb 28, 2026",
    category: "Hardware",
  },
  {
    id: 4,
    image: LaptopAccessories, // Repeated for demo
    title: "Maintaining Your Gear: A Full Guide",
    date: "Feb 20, 2026",
    category: "Maintenance",
  },
];

const BlogCard = () => {
  return (
    <section className="w-full py-5">
      {/* Heading Section */}
      <div className="flex items-center justify-between mb-8 border-l-4 border-brand-primary pl-4">
        <h2 className="font-bold text-lg sm:text-2xl text-gray-900">
          Read Blogs For More Info Our Products
        </h2>
        <button className="hidden sm:block text-xs sm:text-sm font-semibold text-blue-600 hover:underline">
          View All Posts
        </button>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {BLOG_POSTS.map((blog) => (
          <div
            key={blog.id}
            className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 bg-brand-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                {blog.category}
              </span>
            </div>

            {/* Content Area */}
            <div className="p-4 flex flex-col grow">
              <p className="text-gray-500 text-xs mb-2">{blog.date}</p>
              <h3 className="font-semibold text-base md:text-lg text-gray-800 line-clamp-2 group-hover:text-brand-primary transition-colors cursor-pointer">
                {blog.title}
              </h3>
              <div className="mt-auto pt-4">
                <NavLink to="/" className="text-sm font-medium text-gray-700 hover:text-brand-primary flex items-center gap-1 transition-all">
                  Read More <span>→</span>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogCard;
