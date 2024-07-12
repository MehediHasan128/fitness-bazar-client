import { useGetAllCartQuery } from "../../Redux/api/baseApi";

const Cart = () => {

    const {data} = useGetAllCartQuery(undefined);
    console.log(data);

    return (
        <div>
            <h1>This is cart page</h1>
        </div>
    );
};

export default Cart;