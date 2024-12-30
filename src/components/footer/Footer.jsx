import React from "react";
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white py-3 gap-5">
      {/* Footer Image */}
      <div
        className="flex items-center justify-center gap-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={footer_logo} alt="" />
        <p className="text-2xl font-medium ">SHOPPER</p>
      </div>

      <ul className="flex  flex-wrap gap-12">
        <li className="cursor-pointer hover:text-gray-200">Company</li>
        <li className="cursor-pointer hover:text-gray-200">Products</li>
        <li className="cursor-pointer hover:text-gray-200">Offices</li>
        <li className="cursor-pointer hover:text-gray-200">About</li>
        <li className="cursor-pointer hover:text-gray-200">Contact</li>
      </ul>

      <div className="flex gap-6 ">
        <div className="cursor-pointer">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="cursor-pointer">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="cursor-pointer">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>

      <div className="flex flex-col items-center w-full justify-center gap-2">
        <hr className="w-[80%] mb-2" />
        <p className="mb-2">Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
