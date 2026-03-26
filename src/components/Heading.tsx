import { cn } from "@/lib/utils";
import React from "react";
import { NavLink } from "react-router-dom";
interface HeadingProps {
  title: string;
  link: string;
  className?: string;
  linkName: string;
}

const Heading = ({ title, link, className, linkName }: HeadingProps) => {
  return (
    <section className={cn("mt-3 space-y-3", className)}>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg sm:text-2xl">{title}</h1>
        <NavLink
          to={link}
          className="text-xs sm:text-sm hover:text-brand-primary underline"
        >
          {linkName}
        </NavLink>
      </div>
    </section>
  );
};

export default Heading;
