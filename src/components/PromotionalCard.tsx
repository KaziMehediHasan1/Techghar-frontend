import ZipLogo from "@/assets/images/zip-logo.png";

const PromotionalCard = () => {
  return (
    <div
      className="p-5 rounded flex flex-col sm:flex-row items-center
        text-center sm:text-left justify-center gap-5 bg-[#F5F7FF] my-5 "
    >
      <img
        src={ZipLogo}
        alt="zip-logo"
        loading="lazy"
        className="w-24 sm:border-r-2 sm:border-dim-primary sm:pr-4"
      />
      <section className="flex items-center gap-2 text-brand-primary/80">
        <p className="text-xs sm:text-[1rem]">
          own it now, up to 6 months interest free
        </p>
        <a href="" className="text-xs sm:text-sm underline">
          learn more
        </a>
      </section>
    </div>
  );
};

export default PromotionalCard;
