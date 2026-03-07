import { cn } from "@/lib/utils";
import React from "react";
import { NavLink } from "react-router-dom";
interface HeadingProps {
  title: string;
  link: string;
  className?: string;
}

const Heading = ({ title, link, className }: HeadingProps) => {
  return (
    <section className={cn("mt-3 space-y-3", className)}>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-sm sm:text-xl">{title}</h1>
        <NavLink
          to={link}
          className="text-xs sm:text-sm hover:text-brand-primary underline"
        >
          See All New Products
        </NavLink>
      </div>
    </section>
  );
};

export default Heading;
