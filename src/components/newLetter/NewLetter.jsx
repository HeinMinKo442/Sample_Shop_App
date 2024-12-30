import React from "react";

const NewLetter = () => {
  return (
    <div className="flex mx-atuo items-center h-[70vh] justify-center mt-12 px-4">
      <div
        className="flex flex-col items-center justify-center my-5 mt-12 bg-gradient-to-b from-gray-200 to-gray-50"
        style={{
          height: "50vh",
          width: "65%",
        }}
      >
        <h1 className="text-3xl font-semibold mb-8">
          Get Exclusive Offers On Your Mail
        </h1>
        <p className="text-gray-500 mb-5">
          Subscribe to our newLetter and stay updated
        </p>
        <div className="flex items-center justify-center outline border-none rounded-full w-[65%]">
          <input
            type="email"
            className="py-1 px-4 border-none outline-none bg-gray-50 w-full rounded-l-full"
            placeholder="Enter Your Email Id"
          />
          <button className="bg-black ml-[-20px] border-none justify-end outline-none text-white py-1 px-4 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
