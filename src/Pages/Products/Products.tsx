import { useForm } from "react-hook-form";
import { useGetAllProductsQuery } from "../../Redux/api/baseApi";
import { TProducts } from "../../Types/types";
import ProductCard from "./ProductCard";
import { useState } from "react";

const Products = () => {
  const [searchValue, setSearchValue] = useState('');
  const { data } = useGetAllProductsQuery(searchValue);

  const products = data?.data;

  const {register, handleSubmit, reset} = useForm();

  const handelSearch = (data) => {
    const {searchTerm} = data;
    setSearchValue(searchTerm);
  }

  return (
    <div className="max-w-[90%] mx-auto p-20">
      <div className="mb-20 flex justify-between items-center">
        <div className="w-[40%] relative">
          <form onChange={handleSubmit(handelSearch)} className="w-full">
            <input
            {...register('searchTerm')}
              type="text"
              className="border px-5 py-3 rounded-full bg-slate-50 w-full font-medium shadow"
              placeholder="Search Product"
            />
          </form>
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
