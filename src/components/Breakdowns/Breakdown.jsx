import React from "react";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breakdown = ({ product }) => {
  return (
    <div className="flex mb-5 gap-1 items-center">
      Home <img src={arrow_icon} alt="" />
      Shop
      <img src={arrow_icon} alt="" />
      {product.category}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breakdown;
