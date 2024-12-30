import React from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";

const ProductDisplay = ({ product }) => {
  return (
    <div className="flex flex-row my-5 mx-auto">
      <div className="flex flex-1">
        <div className="flex flex-col gap-3 mr-4">
          <img className="w-32" src={product.image} alt="" />
          <img className="w-32" src={product.image} alt="" />
          <img className="w-32" src={product.image} alt="" />
          <img className="w-32" src={product.image} alt="" />
        </div>
        <div className="flex w-full">
          <img  src={product.image} alt="" />
        </div>
      </div>

      <div className="flex flex-1 flex-col py-2 px-8">
        <h1 className="text-3xl font-medium">{product.name}</h1>
        <div className="flex mt-2 text-xs gap-1">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p className="ml-2">(122)</p>
        </div>
        <div className="mt-3 flex gap-3">
          <div className="line-through text-gray-500">
            $ {product.old_price}
          </div>
          <div>$ {product.new_price}</div>
        </div>
        <div className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          repellat repudiandae mollitia sunt voluptas, impedit iste cupiditate
          optio recusandae minima
        </div>
        <div className="mt-5">
          <h1 className="text-xl">Select Size</h1>
          <div className="flex gap-2 mt-3">
            <div className="py-2 px-4 bg-gray-200 text-black text-sm">S</div>
            <div className="py-2 px-4 bg-gray-200 text-black text-sm">M</div>
            <div className="py-2 px-4 bg-gray-200 text-black text-sm">L</div>
            <div className="py-2 px-4 bg-gray-200 text-black text-sm">Xl</div>
            <div className="py-2 px-4 bg-gray-200 text-black text-sm">XXl</div>
          </div>
        </div>
        <button className="bg-red-600 text-white px-4 py-2 border-none w-40 mt-5">
          ADD TO CART
        </button>
        <div className="flex flex-col mt-10">
          <p>
            <span className="font-medium">Category : </span> Women , T-Shirt,
            Crop Top
          </p>
          <p>
            <span className="font-medium">Tags : </span> Modern , Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
