import { createContext, useContext, useState } from "react";
import all_products from "../components/assets/all_product";

export const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};

  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;

  // for (let product of all_products) {
  //   cart[product.id] = 0;
  // }
  // return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState(getDefaultCart());

  // add to Cart
  const addToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prev) => {
      if (prev[itemId] === 1) {
        const { [itemId]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItem[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalItem = 0;

    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

  const products = all_products;
  return (
    <ShopContext.Provider
      value={{
        products,
        addToCart,
        cartItem,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItem
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

export const useShop = () => {
  return useContext(ShopContext);
};
