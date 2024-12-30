import React from "react";
import exclusive_image from "../assets/exclusive_image.png";

const Offer = () => {
  return (
    <div
      className="flex m-auto px-24 mb-36 rounded-sm bg-gradient-to-b from-red-200 to-red-50 "
      style={{ height: "60vh", width: "65%" }}
    >
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-medium mb-2">Exclusive</h1>
        <h1 className="font-medium text-3xl mb-5">Offers For You</h1>

        <p className="text-lg font-normal">ONLY ON BEST SELLERS PRODUCTS</p>

        <button className="px-4 py-2 rounded-full w-40 bg-red-500 border-none text-white font-normal mt-7 cursor-pointer">
          Check Now
        </button>
      </div>

      <img src={exclusive_image} alt="" className="pt-12 flex justify-end" />
    </div>
  );
};

export default Offer;
