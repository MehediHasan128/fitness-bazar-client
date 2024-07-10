import { useGetAllProductsQuery } from "../../Redux/api/baseApi";

const Products = () => {

    const {data} = useGetAllProductsQuery(undefined);

    const products = data?.data;

    console.log(products);

    return (
        <div>
            <h1>This is all products page</h1>
        </div>
    );
};

export default Products;