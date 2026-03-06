import VerticalCard from "@/components/cards/VerticalCard";
import Hero from "@/components/home/Hero";
import Wrapper from "@/components/layout/Wrapper";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <Wrapper>
        {/* SLIDER */}
        <Hero />
        <section className="mt-3 space-y-3">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-sm sm:text-xl">New Products</h1>
            <NavLink
              to="/product/new"
              className="text-xs sm:text-sm hover:text-brand-primary underline"
            >
              See All New Products
            </NavLink>
          </div>
          <VerticalCard />
          
        </section>
      </Wrapper>
    </div>
  );
}

export default Home;
