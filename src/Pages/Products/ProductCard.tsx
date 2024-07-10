import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, images, price, _id } = product;

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={images} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold">
          Price: <span className="text-blue-500">${price}</span>
        </p>
        <div className="card-actions justify-end">
          <Link to={`/product-details/${_id}`}>
            <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md font-semibold text-white hover:bg-blue-800 duration-700 hover:translate-x-1">
              Details
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
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
