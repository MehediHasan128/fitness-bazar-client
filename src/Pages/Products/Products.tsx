import { useGetAllProductsQuery } from "../../Redux/api/baseApi";
import { TProducts } from "../../Types/types";
import ProductCard from "./ProductCard";

const Products = () => {
  const { data } = useGetAllProductsQuery(undefined);

  const products = data?.data;

  return (
    <div className="max-w-[90%] mx-auto p-20">
      <div className="mb-20 flex justify-between items-center">
        <div className="w-[40%] relative">
          <form className="w-full">
            <input
              type="text"
              className="border px-5 py-3 rounded-full bg-slate-50 w-full font-medium shadow"
              placeholder="Search Product"
            />
            <button
              type="submit"
              className="absolute top-0 right-0 h-full px-5 rounded-r-full flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </form>
        </div>

        <div>
          <select>
            <option value="">Category</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5">
        {products?.map((product: TProducts) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
