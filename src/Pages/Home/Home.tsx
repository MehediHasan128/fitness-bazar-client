import { useGetAllCategoryQuery } from "../../Redux/api/baseApi";

const Home = () => {

    const {data} = useGetAllCategoryQuery(undefined);

    const categories = data?.data;

    return (
        <div>
            <h1>This is home page</h1>
        </div>
    );
};

export default Home;