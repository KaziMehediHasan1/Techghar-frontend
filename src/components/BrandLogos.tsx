import Thermaltake from "@/assets/images/thermaltake.png";
import Roccat from "@/assets/images/roccat.png";
import Razar from "@/assets/images/razer.png";
import MSI from "@/assets/images/msi.png";
import HP from "@/assets/images/hp.png";
import Gigabyte from "@/assets/images/gigabyte.png";
import Adata from "@/assets/images/adata.png";

const Logos = [Thermaltake, Roccat, Razar, MSI, HP, Gigabyte, Adata];

const BrandLogos = () => {
  return (
    <div
      className="flex flex-col sm:flex-row items-center
        justify-center gap-5"
    >
      {Logos.map((logo) => (
        <img src={logo} alt="logo" className="w-24 mx-auto"/>
      ))}
    </div>
  );
};

export default BrandLogos;
