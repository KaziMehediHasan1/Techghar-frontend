import { BreadcrumbBasic } from "@/components/Breadcrumb";
import Wrapper from "@/components/layout/Wrapper";
import Office from "@/assets/images/Office.png";
import KeyboardImage from "@/assets/images/MachanicalKey.png";
import PCSafe from "@/assets/images/PCSafeBox.png";
import WhitePC from "@/assets/images/whitePc.png";
import ShopLogo from "@/assets/images/shopLogo.png";
import QualityIcon from "@/assets/images/QualityIcon.png";
import SafeIcon from "@/assets/images/SafeIcon.png";
import ReviewCard from "@/components/cards/ReviewCard";
import HelpersCard from "@/components/cards/HelpersCard";

const About = () => {
  return (
    <div className="mt-4 space-y-1">
      <Wrapper>
        <div className="space-y-4 mb-6">
          <BreadcrumbBasic />
          <h1 className="text-2xl sm:text-3xl font-bold">About Us</h1>
        </div>
      </Wrapper>

      {/* Section 1: A Family That Keeps On Growing */}
      <section className="bg-black text-white py-12 sm:py-20">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 space-y-6 order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
                A Family That Keeps On Growing
              </h2>
              <div className="space-y-4 text-gray-300">
                <p className="text-sm sm:text-base leading-relaxed">
                  We always aim to please the home market, supplying great
                  computers and hardware at great prices to non-corporate
                  customers through our large showroom and online store.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Our management approach fosters a strong customer service
                  focus. We prefer to cultivate long-term client relationships
                  rather than achieve quick sales.
                </p>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2 w-full">
              <img
                src={Office}
                alt="Office"
                className="rounded-md w-full h-auto object-cover max-h-90 shadow-lg"
              />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Section 2: Shop.com */}
      <section className="py-12 sm:py-20">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center items-center gap-10 lg:gap-16">
            <div className="flex-1 w-full">
              <img
                src={KeyboardImage}
                alt="Keyboard"
                className="rounded-md w-full h-auto object-cover max-h-80 "
              />
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <img
                  src={ShopLogo}
                  alt="Shop Logo"
                  className="w-12 h-12 object-contain"
                />
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
                  Shop.com
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Our online presence allows us to reach enthusiasts nationwide.
                Whether you are looking for a custom mechanical keyboard or the
                latest GPU, we've got you covered with a curated selection of
                premium tech.
              </p>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Section 3: Now You're In Safe Hands */}
      <section className="bg-gray-50 py-12 sm:py-20">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 space-y-6 order-2 lg:order-1">
              <div className="flex items-center gap-4">
                <img src={SafeIcon} alt="Safe" className="w-10 h-10" />
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
                  Now You're In Safe Hands
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Experience peace of mind with our secure packaging and certified
                technician handling. Every component is treated with the utmost
                care to ensure it arrives in pristine condition.
              </p>
            </div>
            <div className="flex-1  order-1 lg:order-2 w-full h-auto">
              <img
                src={PCSafe}
                alt="Safe PC"
                className="rounded-md w-full  object-cover h-auto mx-auto max-w-80"
              />
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Section 4: The Highest Quality of Products */}
      <section className="pt-12 sm:pt-20">
        <Wrapper>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 w-full h-auto">
              <img
                src={WhitePC}
                alt="High Quality PC"
                className="rounded-md w-full h-auto object-cover max-h-fit"
              />
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <img src={QualityIcon} alt="Quality" className="w-10 h-10" />
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">
                  The Highest Quality of Products
                </h2>
              </div>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                We only stock brands we trust. Our rigorous testing process
                ensures that every product on our shelves meets the high
                performance standards our customers expect.
              </p>
            </div>
          </div>
        </Wrapper>
      </section>
      
      <section className="space-y-6 sm:space-y-10 sm:my-12">
        <ReviewCard />
        <HelpersCard />
      </section>
    </div>
  );
};

export default About;
