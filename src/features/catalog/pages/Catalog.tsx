import Wrapper from "@/components/layout/Wrapper";
import Banner from "@/assets/images/AdBanner.png";
import { BreadcrumbBasic } from "@/components/BreadcrumbBasic";
import Filtered from "@/features/catalog/components/Filtered";
import CatalogCards from "@/features/catalog/components/CatalogCards";
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
          {/* Toggle bar and card changing button */}
          <div>
            
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* Filtering Section */}
            <div>
              <Filtered />
            </div>
            {/* Card Data */}
            <div>
              <CatalogCards />
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

export default Catalog;
