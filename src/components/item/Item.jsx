import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="flex flex-col w-64 rounded-sm hover:transform hover:scale-105 transition-all duration-400 ease-in-out">
      <Link to={`/products/${item.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={item.image} alt="" />
      </Link>
      <p className="mt-4">{item.name}</p>
      <div className="flex gap-4 mt-2">
        <div>${item.new_price}</div>
        <div className="text-gray-500 line-through">${item.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
