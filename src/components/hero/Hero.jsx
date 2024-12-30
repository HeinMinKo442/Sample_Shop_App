import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div
      
      className="flex justify-center items-center px-10 h-screen "
    >
      <div className="flex flex-col flex-1 justify-center gap-5 pl-10 ">
        <h2 className="text-lg mb-5">NEW ARRIVALS ONLY</h2>

        <div className="text-4xl font-semibold">
          <div className="flex items-center gap-2 mb-5">
            <p>new</p>
            <img className="w-10" src={hand_icon} alt="" />
          </div>
          <p className="mb-4">collection</p>
          <p>for everyone</p>
        </div>

        <div className="flex justify-center items-center gap-4 py-2 px-4 rounded-2xl cursor-pointer mt-7 bg-red-500 text-white text-xl w-60 font-bold">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="flex flex-1 py-6 items-center justify-center ">
        <img className="lg:w-96 md:w-80 sm:w-50 w-50" src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
