import React from "react";
import data_product from "../assets/data";
import Item from "../item/Item";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center w-full justify-center h-full mt-16 ">
      <h1 className="font-medium text-3xl text-center mb-2">Related Product</h1>
      <hr className="w-32 h-1 rounded-lg bg-black item-center mb-10" />
      <div className="flex gap-4 w-full justify-center mx-auto">
        {data_product.map((product) => {
          return <Item key={product.id} item={product} />;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
