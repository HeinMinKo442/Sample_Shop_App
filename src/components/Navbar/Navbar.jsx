import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import mark_icon from "../assets/mark_icon.png";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50 bg-white">
      <div className="flex justify-around p-4 shadow-md">
        <div
          className="flex items-center gap-2 cursor-pointer "
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="logo" />
          <span className="text-xl font-bold">SHOPPER</span>
        </div>

        <div className="md:flex items-center space-x-20 hidden">
          <ul className="flex gap-10 text-lg font-normal">
            <li className="hover:text-gray-700">
              <NavLink to="/" className="cursor-pointer">
                Shop
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-gray-700">
              <NavLink to="/mens">Men</NavLink>
            </li>
            <li className="cursor-pointer hover:text-gray-700">
              <NavLink to="womens">Women</NavLink>
            </li>
            <li className="cursor-pointer hover:text-gray-700">
              <NavLink to="/kids">Kids</NavLink>
            </li>
          </ul>

          <div className="flex gap-6 items-center ">
            <div className="border-2 hover:border-blue-500 py-1.5 px-8 rounded-2xl outline-none hover:outline-none">
              <button
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </div>
            <div className="relative cursor-pointer">
              <button
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <img src={cart_icon} className="w-6 h-6" alt="cart" />
                <div
                  className="absolute text-red-600  outline-none rounded-lg"
                  style={{ top: "-15px", right: "-5px" }}
                >
                  0
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden flex items-center text-black">
          <div className="relative">
            <div onClick={() => setShow(!show)} className="cursor-pointer">
              <img src={mark_icon} alt="" className="cursor-pointer" />
            </div>
            <div>
              {show && (
                <div className="absolute right-0 top-5 bg-cyan-700 text-white w-28 shadow-md rounded-lg">
                  <NavLink
                    to="/mens"
                    className="flex cursor-pointer hover:bg-slate-400 px-2 py-2 hover:rounded-t-lg"
                  >
                    Men
                  </NavLink>

                  <NavLink
                    to="/womens"
                    className="flex cursor-pointer hover:bg-slate-400 px-2 py-2"
                  >
                    Women
                  </NavLink>

                  <NavLink
                    to="/kids"
                    className="flex cursor-pointer hover:bg-slate-400 px-2 py-2"
                  >
                    Kids
                  </NavLink>

                  <NavLink
                    to="/cart"
                    className="flex cursor-pointer hover:bg-slate-400 px-2 py-2"
                  >
                    Cart
                  </NavLink>

                  <NavLink
                    to="/login"
                    className="flex cursor-pointer hover:bg-slate-400 px-2 py-2 hover:rounded-b-lg"
                  >
                    Login
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
{
  /* <a href="#electronics" className="block px-4 py-2 hover:bg-gray-100">
Electronics
</a>
<a href="#fashion" className="block px-4 py-2 hover:bg-gray-100">
Fashion
</a>
<a href="#home" className="block px-4 py-2 hover:bg-gray-100">
Home & Garden
</a>
</div> */
}
