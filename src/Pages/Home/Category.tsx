import { useGetAllCategoryQuery } from "../../Redux/api/baseApi";

const Category = () => {

    const {data} = useGetAllCategoryQuery(undefined);

    const categories = data?.data;


    return (
        <div className="my-20 max-w-[80%] mx-auto">
            <h1 className="text-4xl text-center font-semibold">Product Category</h1>
            <div className="border-2 border-red-700 w-24 mx-auto mt-2"></div>    
        </div>
    );
};

export default Category;