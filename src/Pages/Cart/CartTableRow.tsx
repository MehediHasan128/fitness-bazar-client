import { TCartProduct } from "../../Types/types";

type TProps = {
  product: TCartProduct;
};

const CartTableRow = ({ product }: TProps) => {
  const { productImage, productName, productPrice, productQuantity } = product;

  return (
    <tr className="text-lg font-semibold">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img
                src={productImage}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{productName}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        <p>${productPrice}</p>
      </td>
      <td>
        <p>{productQuantity}</p>
      </td>
      <th>
      <p className="text-blue-500">${productPrice}.00</p>
      </th>
    </tr>
  );
};

export default CartTableRow;
