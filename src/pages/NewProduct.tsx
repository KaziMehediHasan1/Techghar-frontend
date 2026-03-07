import VerticalCard from "@/components/cards/VerticalCard";
import Heading from "@/components/Heading";

const NewProduct = () => {
  return (
    <section className="mt-3 space-y-3">
      <Heading title="New Product" link="/" />
      <VerticalCard />
    </section>
  );
};

export default NewProduct;
