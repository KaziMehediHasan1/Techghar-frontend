import SupportButton from "@/features/product/components/SupportButton";
import SupportImage from "@/assets/images/support.png"
const SupportBanner = () => {
  return (
    <section className="relative w-full bg-sky overflow-hidden mt-3">
      <div className="max-w-350 mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-20 min-h-87.5">
        {/* Left Side: Navigation Buttons */}
        <div className="flex flex-col gap-4 w-full md:w-1/3 z-10 py-10 md:py-0">
          <SupportButton label="Product Support" />
          <SupportButton label="FAQ" />
          <SupportButton label="Our Buyer Guide" />
        </div>

        {/* Right Side: Image with Decorative Elements */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
          {/* Background subtle circle effect if needed */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>

          <img
            src={SupportImage}
            alt="Customer Support"
            className="relative rounded-sm z-10 w-full max-w-125 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportBanner;
