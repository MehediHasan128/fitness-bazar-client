import { Link, NavLink } from "react-router-dom";
import { useGetAllCartQuery } from "../../Redux/api/baseApi";

const Header = () => {

  const {data} = useGetAllCartQuery(undefined);

  const items = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Products",
      path: "/products",
    },
    {
      name: "Product Management",
      path: "/product-management",
    },
    {
      name: "About Us",
      path: "/about",
    },
  ];

  return (
    <div className="navbar bg-[#141414] text-white px-16 py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-center text-xl leading-tight">
            <span className="text-2xl font-bold text-red-600">Fitness</span>{" "}
            <br />
            Bazar
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex space-x-10">
        {items.map((item) => (
          <NavLink
            to={item.path}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-red-600 text-lg font-bold"
                : "text-lg font-semibold"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
      <div className="navbar-end">
        <Link to="/cart">
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <div className="badge badge-secondary">{(data?.data.length > 2)? `+${data?.data.length}` : `${data?.data.length}`}</div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
