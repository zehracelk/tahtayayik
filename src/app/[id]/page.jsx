import ProductCard from "../../components/cards/ProductCard";

const page = ({ params }) => {
  return (
    <div className="mt-40">
      <ProductCard id={params.id} />
    </div>
  );
};

export default page;
