import { BreadcrumbBasic } from "@/components/Breadcrumb";
import Wrapper from "@/components/layout/Wrapper";
import Office from "@/assets/images/Office.png";

const About = () => {
  return (
    <div className="mt-6">
      <Wrapper>
        <div className="space-y-4 mb-6">
          <BreadcrumbBasic />
          <h1 className="text-2xl sm:text-3xl font-bold">About Us</h1>
        </div>
      </Wrapper>

      {/* Main Content Section */}
      <section className="bg-black text-white py-12 sm:py-20">
        <Wrapper>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 space-y-6 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
                A Family That Keeps On Growing
              </h2>

              <div className="space-y-4 text-gray-300">
                <p className="text-sm sm:text-base leading-relaxed">
                  We always aim to please the home market, supplying great
                  computers and hardware at great prices to non-corporate
                  customers, through our large Melbourne CBD showroom and our
                  online store.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Shop management approach fosters a strong customer service
                  focus in our staff. We prefer to cultivate long-term client
                  relationships rather than achieve quick sales, demonstrated in
                  the measure of our long-term success.
                </p>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 order-1 lg:order-2 w-full">
              <img
                src={Office}
                alt="Our Office"
                className="rounded-md w-full h-auto object-cover max-h-90"
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default About;
