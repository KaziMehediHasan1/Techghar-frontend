import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ICard {
  icon: string | ReactNode;
  name: string;
  count: number | string;
  lastWeekData: number | string;
  Trending: string | ReactNode;
  pathForView: string;
}

const Cards = ({
  icon,
  name,
  count,
  lastWeekData,
  Trending,
  pathForView,
}: ICard) => {
  return (
    <div className="shadow-2xl shadow-dim-primary rounded-md bg-white">
      <section className="flex justify-between p-2 sm:p-4">
        <div className="bg-dim-primary/30 w-fit p-2 sm:p-4 rounded-md">
          {icon}
        </div>
        <div className="flex flex-col items-end-safe gap-x-2">
          <h1 className="text-sm sm:text-md text-text-dim">{name}</h1>
          <p className="text-sm sm:text-xl font-bold font-sans ">{count}</p>
        </div>
      </section>
      <section className="bg-accent px-2 sm:px-4 py-2.5 flex items-center justify-between">
        <div className="text-xs sm:text-sm text-text-dim flex items-center gap-x-2">
          {Trending} {lastWeekData} Last week
        </div>
        <Link
          to={pathForView}
          className="text-text-dim font-semibold text-xs sm:text-sm"
        >
          View More
        </Link>
      </section>
    </div>
  );
};

export default Cards;
