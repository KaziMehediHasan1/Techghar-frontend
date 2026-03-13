import Wrapper from "@/components/layout/Wrapper";
import Banner from "@/assets/images/AdBanner.png";
import { BreadcrumbBasic } from "@/components/BreadcrumbBasic";
const Catalog = () => {
  return (
    <div>
      <Wrapper>
        {/* Banner Section */}
        <section>
          <img src={Banner} alt="banner" className="w-full h-10 sm:h-auto" />
        </section>
        {/* Breadcrum and Header */}
        <section className="space-y-2 my-3">
          <BreadcrumbBasic />
          <h1 className="text-sm sm:text-xl font-semibold">
            MSI PS Series (20)
          </h1>{" "}
          {/* dynamic update*/}
        </section>
        {/* Main Section - filter, card section */}
        <section>
          {/* Filtering Section */}
          <div></div>
          {/* Card Data */}
          <div></div>
        </section>
      </Wrapper>
    </div>
  );
};

export default Catalog;
