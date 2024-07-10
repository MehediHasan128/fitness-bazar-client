import { useGetAllCategoryQuery } from "../../Redux/api/baseApi";
import Banner from "./Banner";

const Home = () => {

    const {data} = useGetAllCategoryQuery(undefined);

    const categories = data?.data;

    return (
        <div>
            <Banner />
        </div>
    );
};

export default Home;