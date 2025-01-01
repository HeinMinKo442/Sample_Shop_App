import React from "react";
import { useShop } from "../contexts/ShopContext";
import dorpdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/item/Item";

const ShopCategory = (props) => {
  const { products } = useShop();
  return (
    <div className="mt-32">
      <img className="mt-8 block w-[82%] mx-auto" src={props.banner} />
      <div className="flex justify-between items-center my-4 mx-auto w-[82%]">
        <p className="font-medium">
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="flex gap-2 px-4 cursor-pointer py-1 items-center justify-between rounded-2xl border-2">
          Sort by <img src={dorpdown_icon} className="w-3 h-3" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[82%] mx-auto">
        {products.map((item) => {
          if (props.category === item.category) {
            return <Item key={item.id} item={item} />;
          } else {
            return null;
          }
        })}
      </div>
      <div className="flex justify-center items-center mt-10 mx-auto rounded-3xl w-40 h-14 bg-gray-500 text-white text-lg cursor-pointer font-medium mb-10">
        explore more
      </div>
    </div>
  );
};

export default ShopCategory;
