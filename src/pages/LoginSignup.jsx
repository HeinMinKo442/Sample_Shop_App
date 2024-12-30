import React from "react";

const LoginSignup = () => {
  return (
    <div className="w-full h-[90vh] pt-24 mb-40 mt-10">
      <div className=" m-auto p-10 max-w-[580px] rounded-lg h-full bg-neutral-200">
        <h1 className="text-3xl mb-10 font-medium">Sign Up</h1>
        <div className="flex flex-col gap-4 mt-7 mb-2">
          <input
            className="w-full pl-5 outline-none py-2 border-none focus:ring focus:ring-blue-400 text-black hover:outline-none rounded-lg"
            type="text"
            placeholder="Enter Your Name"
          />
          <input
            className="w-full pl-5 outline-none py-2 border-none focus:ring focus:ring-blue-400 text-black hover:outline-none rounded-lg"
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            className="w-full pl-5 outline-none py-2 border-none focus:ring focus:ring-blue-400 text-black hover:outline-none rounded-lg"
            type="password"
            placeholder="Enter Your Password"
          />
        </div>

        <button className="py-2 mt-4 bg-red-500 text-white px-4 w-full cursor-pointer text-lg">
          Continue
        </button>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <span className="text-red-600 cursor-pointer"> Login</span>
        </p>
        <div className="flex items-center mt-6 gap-5">
          <input type="checkbox" name="" id="" />
          <p>By Continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
