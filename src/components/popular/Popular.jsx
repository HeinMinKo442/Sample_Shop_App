import React from "react";
import data_products from "../assets/data";
import Item from "../item/Item";

const Popular = () => {
  return (
    <div className="flex justify-center gap-3 h-full flex-col items-center mb-4 md:h-full sm:h-full lg:h-screen ">
      <h1 className="text-2xl font-bold mb-2">POPULAR IN WOMEN </h1>
      <hr className="w-[180px] h-1 mb-5 bg-black rounded-md" />
      <div className="flex flex-wrap justify-center gap-4 mt-4">
        {data_products.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
