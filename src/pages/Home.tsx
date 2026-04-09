import BrandLogos from '@/components/BrandLogos';
import BlogCard from '@/components/cards/BlogCard';
import HelpersCard from '@/components/cards/HelpersCard';
import ReviewCard from '@/components/cards/ReviewCard';
import Accessories from '@/components/home/Accessories';
import Hero from '@/components/home/Hero';
import AmdBrandData from '@/components/home/AmdBrandData';
import Wrapper from '@/components/layout/Wrapper';
import PromotionalCard from '@/components/PromotionalCard';
import NewProduct from '@/pages/NewProduct';
import LaptopData from '@/components/home/LaptopData';

function Home() {
  return (
    <div>
      <Wrapper>
        {/* SLIDER */}
        <Hero />
        <NewProduct />
        <PromotionalCard />
        <section className="mt-3 space-y-5">
          <Accessories />
          <LaptopData />
          <AmdBrandData />
        </section>
        <BrandLogos />
        <BlogCard />
        <ReviewCard />
        <HelpersCard />
      </Wrapper>
    </div>
  );
}

export default Home;
