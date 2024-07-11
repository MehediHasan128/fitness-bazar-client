import { Link } from "react-router-dom";
import { useGetProductDetailsQuery } from "../../Redux/api/baseApi";

const ProductDetails = () => {
  const currentURL = window.location.href;
  const parts = currentURL.split("/");
  const { data } = useGetProductDetailsQuery(parts[4]);
  const product = data?.data;

  return (
    <div className="max-w-[90%] mx-auto min-h-screen my-10">
      <div className="flex">
        <div className="w-[50%] p-16">
          <img src={product?.imageUrl} alt="" />
        </div>
        <div className="w-[50%] my-10">
          <Link to="/products">
            <div className="flex items-center gap-2 font-semibold text-purple-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <p>Back to Products</p>
            </div>
          </Link>

          <div>
            <h1 className="text-3xl mt-5 font-extrabold">{product?.name}</h1>

            <div className="flex items-center gap-2 my-3">
              <div className="rating size-24 h-fit">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star bg-orange-400"
                />
              </div>

              <p className="font-semibold">3.5 (385 reviews)</p>
            </div>

            <h2 className="text-xl font-semibold">
              Price: <span className="text-blue-600">${product?.price}</span>
            </h2>

            <div className="my-10">
              <h1 className="text-2xl font-semibold mb-3">Product Details</h1>

              <p>{product?.description}</p>
            </div>

            <div>
              <h1 className="text-xl font-semibold">Select Quality</h1>

              <div className="flex items-center border w-fit rounded mt-3 font-medium">
                <p className=" cursor-pointer px-6 py-2 border-r">Basic</p>
                <p className=" cursor-pointer px-6 py-2 bg-slate-100">
                  Premium
                </p>
              </div>
            </div>

            <div className="mt-5">
              <h1 className="text-xl font-semibold">Select Quantity</h1>

              <div className="flex items-center border w-fit rounded mt-3 font-medium">
                <p className=" cursor-pointer px-6 py-2 border-r">-</p>
                <p className=" cursor-pointer px-6 py-2">0</p>
                <p className=" cursor-pointer px-6 py-2 border-l">+</p>
              </div>
            </div>

            <button className="mt-12 flex items-center bg-blue-400 px-6 py-2 rounded-md gap-2 font-semibold text-white hover:bg-blue-700 duration-700">
              Add to cart
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
