import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
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
        <ul className="hidden items-center gap-8 text-xl md:flex">
          <li>
            <NavLink to="/" className="cursor-pointer">
              Shop
            </NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/mens">Men</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="womens">Women</NavLink>
          </li>
          <li className="cursor-pointer">
            <NavLink to="/kids">Kids</NavLink>
          </li>
        </ul>

        <div className="flex gap-6 items-center ">
          <button className="border-2 py-1.5 px-8 rounded-2xl hover:bg-slate-400 active:bg-blue-400 outline-none hover:outline-none">
            <NavLink to="/login">Login</NavLink>
          </button>
          <div className="relative cursor-pointer">
            <NavLink to="cart">
              <img src={cart_icon} className="w-6 h-6" alt="cart" />
              <div
                className="absolute text-red-600  outline-none rounded-lg"
                style={{ top: "-15px", right: "-5px" }}
              >
                0
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
