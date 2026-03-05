import VerticalCard from "@/components/cards/VerticalCard";
import Hero from "@/components/home/Hero";
import Wrapper from "@/components/layout/Wrapper";

function Home() {
  return (
    <div>
      <Wrapper>
        {/* SLIDER */}
        <Hero />
        <section>
          <VerticalCard />
          
        </section>
      </Wrapper>
    </div>
  );
}

export default Home;
