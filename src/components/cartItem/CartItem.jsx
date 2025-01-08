import React from "react";
import { useShop } from "../../contexts/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

const CartItem = () => {
  const { products, cartItem, removeFromCart, getTotalCartAmount } = useShop();
  return (
    <div className="mx-auto w-[82%] px-4">
      <div className="grid grid-cols-7 items-center gap-5 font-medium mb-2 text-lg">
        <p>Products</p>
        <p className="col-span-2">Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="h-1 bg-slate-600 border-none" />
      {products.map((e) => {
        if (cartItem[e.id] > 0) {
          return (
            <div key={e.id} className="mb-4">
              <div className="grid grid-cols-7 items-center justify-center gap-5 font-normal py-2 text-md">
                <img className="h-16" src={e.image} alt="" />
                <p className="col-span-2">{e.name}</p>
                <p>$ {e.new_price}</p>
                <button className="w-14 h-12 border-2 border-gray-400 bg-white">
                  {cartItem[e.id]}
                </button>
                <p>$ {e.new_price * cartItem[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt=""
                  className="cursor-pointer"
                />
              </div>
              <hr className="h-1 bg-slate-800 border-none" />
            </div>
          );
        }
        return null;
      })}
      <div className="flex my-20 flex-wrap">
        <div className="flex-1 flex flex-col gap-10 mr-32 ">
          <h1 className="text-xl font-semibold">Cart Totals</h1>
          <div className="text-md">
            <div className="flex justify-between py-2">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-2">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-2">
              <h3 className="font-medium">Total</h3>
              <p className="font-medium">$ {getTotalCartAmount()}</p>
            </div>
          </div>
          <button className="h-12 w-56 outline-none border-none bg-red-400 text-white font-medium cursor-pointer">
            PROCEED TO CHECOUT
          </button>
        </div>
        <div className="flex-1 font-medium mt-10">
          <p className="text-gray-800">
            If you have a promo code, Enter It Here{" "}
          </p>
          <div className="flex mt-4 w-80 h-12 border-2 rounded-md">
            <input
              type="text"
              className=" ml-4 w-full border-none outline-none"
              placeholder="promo code "
            />
            <button className="bg-black px-4 text-white items-end">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
