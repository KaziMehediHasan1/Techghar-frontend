import Wrapper from "@/components/layout/Wrapper";
import Banner from "@/assets/images/AdBanner.png";
import { BreadcrumbBasic } from "@/components/BreadcrumbBasic";
import ButtonSection from "@/features/catalog/components/ButtonSection";
import { useParams } from "react-router-dom";
import { useState } from "react";
const Catalog = () => {
  const { categoryName } = useParams(); // router theke dynamic value nibe
  const [products, setProducts] = useState([]);
  console.log(categoryName, "categoryName");
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
          {/* Toggle bar and card changing button */}
          <ButtonSection />
        </section>
      </Wrapper>
    </div>
  );
};

export default Catalog;
