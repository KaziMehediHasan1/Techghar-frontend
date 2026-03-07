import BrandLogos from "@/components/BrandLogos";
import BlogCard from "@/components/cards/BlogCard";
import CategoryWiseCard from "@/components/cards/CategoryWiseCard";
import Hero from "@/components/home/Hero";
import Wrapper from "@/components/layout/Wrapper";
import PromotionalCard from "@/components/promotionalCard";
import NewProduct from "@/pages/NewProduct";

function Home() {
  return (
    <div>
      <Wrapper>
        {/* SLIDER */}
        <Hero />
        <NewProduct />
        <PromotionalCard />
        <section className="mt-3 space-y-5">
          <CategoryWiseCard />
          <CategoryWiseCard />
          <CategoryWiseCard />
          <CategoryWiseCard />
        </section>
        <BrandLogos />
        <BlogCard />
      </Wrapper>
    </div>
  );
}

export default Home;
