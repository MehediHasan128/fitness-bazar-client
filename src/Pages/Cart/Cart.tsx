import { useGetAllCartQuery } from "../../Redux/api/baseApi";
import { TCartProduct } from "../../Types/types";
import CartTableRow from "./CartTableRow";

const Cart = () => {
  const { data } = useGetAllCartQuery(undefined);
  const cartProducts = data?.data;

  let totalPrice = cartProducts?.reduce((total: number, item: TCartProduct) => {
    return total + item.productPrice
  }, 0);

  let tax = totalPrice * 0.2

  let grandTotal = totalPrice + tax;

  return (
    <div className="max-w-[80%] mx-auto my-20">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="text-lg font-medium">
            <tr>
              <th>Check Box</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartProducts?.map((product: TCartProduct) => (
              <CartTableRow key={product._id} product={product} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-16 w-[30%] float-right space-y-8">
        <div>
            <div className="flex justify-between px-10 py-3 border-b-2">
              <p className="font-semibold">Subtotal:</p>
              <p className="font-medium">${totalPrice}.00</p>
            </div>
            <div className="flex justify-between px-10 py-3 border-b-2">
              <p className="font-semibold">Sales Tax:</p>
              <p className="font-medium">${tax}.00</p>
            </div>
            <div className="flex justify-between px-10 py-3 border-b-2">
              <p className="font-semibold">Coupon Code:</p>
              <p className="font-medium"><a href="#">Add Coupon</a></p>
            </div>
            <div className="flex justify-between items-center px-10 py-3 border-b-2">
              <p className="font-semibold">Grand Total:</p>
              <p className="text-3xl font-light">${grandTotal}.00</p>
            </div>
        </div>
        <div>
            <button className="bg-black w-full py-3 text-white rounded-md">Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
