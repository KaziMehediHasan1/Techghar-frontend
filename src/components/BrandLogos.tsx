import { cn } from "@/lib/utils";
import Thermaltake from "@/assets/images/thermaltake.png";
import Roccat from "@/assets/images/roccat.png";
import Razar from "@/assets/images/razer.png";
import MSI from "@/assets/images/msi.png";
import HP from "@/assets/images/hp.png";
import Gigabyte from "@/assets/images/gigabyte.png";
import Adata from "@/assets/images/adata.png";

const Logos = [
  { src: Thermaltake, alt: "Thermaltake" },
  { src: Roccat, alt: "Roccat" },
  { src: Razar, alt: "Razer" },
  { src: MSI, alt: "MSI" },
  { src: HP, alt: "HP" },
  { src: Gigabyte, alt: "Gigabyte" },
  { src: Adata, alt: "Adata" },
];

const BrandLogos = () => {
  return (
    <div className="w-full py-8 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 md:gap-8 items-center justify-items-center">
        {Logos?.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-full group"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={cn(
                "w-full max-w-32 sm:max-w-36",
                "grayscale hover:grayscale-0 transition-all duration-300 object-contain",
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
