import { useGetAllCategoryQuery } from "../../Redux/api/baseApi";
import { TCategory } from "../../Types/types";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const { data } = useGetAllCategoryQuery(undefined);

  const categories = data?.data;

  return (
    <div className="my-20 max-w-[80%] mx-auto">
      <h1 className="text-4xl text-center font-semibold">Product Category</h1>
      <div className="border-2 border-red-700 w-24 mx-auto mt-2"></div>

      
      <div className="flex gap-10 mt-20">
        {
            categories?.map((category: TCategory) => <CategoryCard key={category._id} category={category} />)
        }
      </div>
    </div>
  );
};

export default Category;
