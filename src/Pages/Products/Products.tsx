import { useGetAllProductsQuery } from "../../Redux/api/baseApi";
import { TProducts } from "../../Types/types";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data } = useGetAllProductsQuery(undefined);

  const products = data?.data;
  console.log(products);

  return (
    <div className="max-w-[90%] mx-auto p-20">
      
      <div className="grid grid-cols-4 gap-5">
       {
        products?.map((product: TProducts) => <ProductCard key={product._id} product={product} />)
       }
      </div>

    </div>
  );
};

export default Products;
