import { NavLink } from "react-router-dom";

const Header = () => {

  const items = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Products',
      path: '/products'
    },
    {
      name: 'Product Management',
      path: '/product-management'
    },
    {
      name: 'About Us',
      path: '/about'
    },
  ]

    return (
        <div className="navbar bg-base-200 px-16 py-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex space-x-10">
      {
        items.map(item => <NavLink to={item.path} className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-600 text-lg font-bold" : "text-lg font-semibold"
        }>{item.name}</NavLink>)
      }
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Header;